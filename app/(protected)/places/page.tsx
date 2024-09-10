"use client";

import { MapFilterFacilities } from "../_components/mapFilterFacilities";
import LocationCard from "../_components/locationCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DISTRICTS } from "../../../constants/districts";
import Checkbox from "../_components/checkbox";
import { useSearchParams, useRouter } from "next/navigation";
import { Place } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Pagination } from "./pagination";
import { PAGE_SIZE } from "@/constants/pagination";

const getNearestDistrict = (lat: number, lng: number) => {
  let minDistrictDistance: [string, number] = ["", Infinity];
  Object.entries(DISTRICTS).forEach(([district, position]) => {
    const { latitude, longitude } = position;
    const distance = Math.sqrt(
      Math.pow(lat - latitude, 2) + Math.pow(lng - longitude, 2)
    );
    if (distance < minDistrictDistance[1]) {
      minDistrictDistance = [district, distance];
    }
  });

  return minDistrictDistance[0];
};

const PlacePage = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const districtFilter = params.get("district");
  const facilityFilter = params.get("facility") || "";
  const page = params.get("page") || '1';

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      try {
        if (districtFilter) {
          params.set("district", districtFilter);
        }

        if (facilityFilter) {
          params.set("facility", facilityFilter);
        }

        if (page) {
          params.set("page", page);
        }

        let data = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/places?${params.toString()}`
        );
        const places: Place[] = await data.json();
        setPlaces(places);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong! Try again later");
      }
      setIsLoading(false);
    }
    fetchPlaces();
  }, [districtFilter, facilityFilter, page]);

  const onClickDistrictCheckbox = (district: string) => {
    params.set("district", district === districtFilter ? "" : district);
    params.set("page", '1');
    router.push(window.location.pathname + "?" + params.toString());
  };

  const onClickFacilityFilter = (facility: string) => {
    params.set("facility", facility);
    params.set("page", String(page));
    router.push(window.location.pathname + "?" + params.toString());
  };

  const onClickPage = (page: number) => {
    params.set("page", String(page));
    router.push(window.location.pathname + "?" + params.toString());
  };

  const searchByNearest = useCallback(() => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const district = getNearestDistrict(latitude, longitude);

          if (district !== districtFilter) {
            params.set("district", district);
            router.push(window.location.pathname + "?" + params.toString());
          } else {
            setIsLoading(false);
          }
        },
        (e) => {
          console.log(e);
          setIsLoading(false);
          toast.error("Please enable location services in your browser");
        }
      );
    }
  }, [districtFilter, params]);

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex space-between px-10">
          <div className="flex flex-wrap flex-1 gap-x-2">
            {Object.keys(DISTRICTS).map((district) => (
              <Checkbox
                key={district}
                label={district}
                checked={districtFilter === district}
                onChange={onClickDistrictCheckbox}
              />
            ))}
          </div>
          <Button
            className="ml-4 py-5 flex items-center"
            size="sm"
            variant="outline"
            onClick={searchByNearest}
          >
            <img className="mr-2" width={20} height={20} src="/location.svg" />
            搜索附近
          </Button>
        </div>
        <MapFilterFacilities
          onChange={onClickFacilityFilter}
          value={facilityFilter}
        />
      </div>
      {isLoading && <div className="w-full px-10 text-center">Loading...</div>}
      {!isLoading && places.length > 0 && (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 w-full px-10 xl:px-40 pb-2">
          {places.map((place, key) => (
            <LocationCard
              key={key}
              name={place.name}
              district={place.district}
              address={place.address}
              facilities={place.facilities || ""}
              url={place.gov_url || ""}
              photoPath={place.photo_path}
            />
          ))}
        </div>
      )}
      {!isLoading && places.length === 0 && (
        <div className="w-full px-10 text-center">No results</div>
      )}
      <Pagination
        page={parseInt(page)}
        onChangePage={onClickPage}
        disableNext={PAGE_SIZE > places.length}
      />
      <div className="h-4"></div>
    </>
  );
};

export default PlacePage;
