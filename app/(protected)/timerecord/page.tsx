"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { TimeRecordDTO as TimeRecord } from "@/app/api/timeRecords/dto";
import { CreateTimeRecord } from "./createtimerecord";
import { useCallback, useEffect, useState } from "react";
import { TimeRecordTable } from "./timerecordtable";
import { toast } from "sonner";

const TimeRecordPage = () => {
  const user = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);

  const fetchTimeRecords = useCallback(async () => {
    setIsLoading(true);

    try {
      let data = await fetch(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/timeRecords`
      );
      const timeRecords: TimeRecord[] = await data.json();
      setTimeRecords(timeRecords);
    } catch (error) {
      toast.error('Something went wrong. Try again later');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTimeRecords();
  }, [fetchTimeRecords]);

  return (
    <div className="w-4/5 mb-8">
      <div className="text-3xl font-bold pb-8 flex justify-between items-center">
        <div>Monthly Schedule</div>
        <CreateTimeRecord onTimeRecordCreated={fetchTimeRecords} />
      </div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <TimeRecordTable timeRecords={timeRecords} />}
    </div>
  );
};

export default TimeRecordPage;
