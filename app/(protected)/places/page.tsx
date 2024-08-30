"use client";

import { MapFilterFacilities } from "../_components/mapFilterFacilities";
import LocationCard from "../_components/locationCard";
import { useEffect, useMemo, useState } from "react";
import { DISTRICTS } from "../../../constants/districts";
import Checkbox from "../_components/checkbox";
import { useSearchParams, useRouter } from "next/navigation";
import { Place } from "@prisma/client";

const PlacePage = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>([]);

  const districtsFilterSet = new Set([
    ...(params.get("districts")?.split(",").filter(Boolean) || []),
  ]);
  const facilityFilter = params.get("facility") || "";

  useEffect(() => {
    if (districtsFilterSet.size === 0) {
      params.set("districts", DISTRICTS[0]);
      router.push(window.location.pathname + "?" + params.toString());
      return;
    }

    async function fetchPlaces() {
      let data = await fetch(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/places?${params.toString()}`
      );
      const places: Place[] = await data.json();
      setPlaces(places);
    }
    fetchPlaces();
  }, [searchParams]);

  const onClickDistrictCheckbox = (district: string) => {
    const newDistrictSet = new Set(districtsFilterSet);
    if (districtsFilterSet.has(district)) {
      newDistrictSet.delete(district);
    } else {
      newDistrictSet.add(district);
    }
    params.set("districts", Array.from(newDistrictSet).join(","));
    router.push(window.location.pathname + "?" + params.toString());
  };

  const onClickFacilityFilter = (facility: string) => {
    params.set("facility", facility);
    router.push(window.location.pathname + "?" + params.toString());
  };

  const filteredPlaces = useMemo(() => {
    return facilityFilter
      ? places.filter(({ facilities }) =>
          new RegExp(
            // exact match for english and chinese character
            `(^|[^a-zA-Z0-9_\\u4e00-\\u9fa5])${facilityFilter}($|[^a-zA-Z0-9_\\u4e00-\\u9fa5])`
          ).test(facilities || "")
        )
      : places;
  }, [places, facilityFilter]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap w-full px-10 gap-x-2">
          {DISTRICTS.map((district) => (
            <Checkbox
              key={district}
              label={district}
              checked={districtsFilterSet.has(district)}
              onChange={onClickDistrictCheckbox}
            />
          ))}
        </div>
        <MapFilterFacilities
          onChange={onClickFacilityFilter}
          value={facilityFilter}
        />
      </div>
      {filteredPlaces.length > 0 && (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 w-full px-10 xl:px-40 pb-10">
          {filteredPlaces.map((place) => (
            <LocationCard
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
      {filteredPlaces.length === 0 && (
        <div className="w-full px-10 text-center">No results found</div>
      )}
    </>
  );
};

export default PlacePage;
