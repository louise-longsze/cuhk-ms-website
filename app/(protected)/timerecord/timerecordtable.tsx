import { TimeRecordDTO as TimeRecord } from "@/app/api/timeRecords/dto";
import { useMemo } from "react";
import _groupBy from "lodash/groupBy";
import dayjs from "dayjs";

interface Props {
  timeRecords: TimeRecord[];
}
export const TimeRecordTable: React.FC<Props> = ({ timeRecords }) => {
  const timeRecordByMonth = useMemo(() => {
    return _groupBy(timeRecords, (t) => {
      console.log(dayjs(t.datetime).month());
      return dayjs(t.datetime).month();
    });
  }, timeRecords);

  return (
    <div className="flex flex-col gap-8">
      {Object.entries(timeRecordByMonth)
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
        .map((timeRecordsByMonth) => {
          return (
            <div className="">
              <div className="pb-3 text-xl font-bold">
                {dayjs(timeRecordsByMonth[0]).format("MMMM")}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {timeRecordsByMonth[1].map((timeRecord) => {
                  return (
                    <div className="p-4 flex flex-col gap-2 bg-white rounded-lg">
                      <div>Name: {timeRecord.name}</div>
                      <div>Date Time: {timeRecord.datetime}</div>
                      <div>Location: {timeRecord.location}</div>
                      <div>
                        <div>Details:</div>
                        <div className="text-xs text-gray-500 mt-2">{timeRecord.details}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
