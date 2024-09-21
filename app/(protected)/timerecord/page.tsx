"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { TimeRecordDTO as TimeRecord } from "@/app/api/timeRecords/dto";
import { BloodPressureDTO as BloodPressure } from "@/app/api/bloodPressures/dto";
import { BloodSugarDTO as BloodSugar } from "@/app/api/bloodSugars/dto";
import { TimeRecordDialog } from "./TimeRecordDialog";
import { useCallback, useEffect, useState } from "react";
import { TimeRecordTable } from "./TimeRecordTable";
import { toast } from "sonner";
import PulseChart from "../_components/pulseChart";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BloodSugarDialog } from "./BloodSugarDialog";
import { BloodPressureDialog } from "./BloodPressureDialog";
import { ListTable } from "./ListTable";
import TimeRecordChart from "../_components/timeRecordChart";

const TimeRecordPage = () => {
  const user = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);
  const [bloodSugars, setBloodSugar] = useState<BloodSugar[]>([]);
  const [bloodPressures, setBloodPressure] = useState<BloodPressure[]>([]);

  const fetchRecords = useCallback(async () => {
    setIsLoading(true);

    try {
      const [timeRecords, bloodSugars, bloodPressures] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/timeRecords`).then((v) =>
          v.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/bloodSugars`).then((v) =>
          v.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/bloodPressures`).then(
          (v) => v.json()
        ),
      ]);
      setTimeRecords(timeRecords);
      setBloodSugar(bloodSugars);
      setBloodPressure(bloodPressures);
    } catch (error) {
      toast.error("Something went wrong. Try again later");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const deleteTimeRecord = useCallback(async (id: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/timeRecords/${id}`, {
        method: "DELETE",
      });
      setTimeRecords((prev) =>
        prev.filter((timeRecord) => timeRecord.id !== id)
      );
      toast.success("成功刪除活動");
    } catch (error) {
      toast.error("刪除活動失敗，請稍後再試");
      console.error(error);
    }
  }, []);

  return (
    <div className="w-4/5 mb-8">
      <div className="text-3xl font-bold pb-8 flex justify-between items-center">
        <div>我要記錄</div>
        <div className="flex gap-2">
          <TimeRecordDialog onSuccess={fetchRecords} />
          <BloodSugarDialog onSuccess={fetchRecords} />
          <BloodPressureDialog onSuccess={fetchRecords} />
          {!isLoading && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="ml-auto" variant="outline">
                  圖表分析
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-auto">
                <TimeRecordChart timeRecords={timeRecords} />
                <PulseChart bloodPressures={bloodPressures} />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <ListTable
            timeRecords={timeRecords}
            bloodSugars={bloodSugars}
            bloodPressures={bloodPressures}
            onUpdatedSuccess={fetchRecords}
          />
          <TimeRecordTable
            timeRecords={timeRecords}
            deleteTimeRecord={deleteTimeRecord}
          />
        </>
      )}
    </div>
  );
};

export default TimeRecordPage;
