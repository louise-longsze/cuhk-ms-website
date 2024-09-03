"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { TimeRecordDTO as TimeRecord } from "@/app/api/timeRecords/dto";
import { CreateTimeRecord } from "./createtimerecord";
import { useEffect, useState } from "react";
import { TimeRecordTable } from "./timerecordtable";

const TimeRecordPage = () => {
  const user = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);

  useEffect(() => {
    async function fetchTimeRecords() {
      let data = await fetch(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/timeRecords`
      );
      const timeRecords: TimeRecord[] = await data.json();
      setTimeRecords(timeRecords);
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchTimeRecords();
  }, []);

  return (
    <>
      <div className="w-4/5">
        <h2>Monthly Schedule</h2>
        <CreateTimeRecord />
        {isLoading && <div>Loading...</div>}
        {!isLoading && <TimeRecordTable timeRecords={timeRecords} />}
      </div>
    </>
  );
};

export default TimeRecordPage;
