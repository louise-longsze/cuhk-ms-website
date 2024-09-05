import { TimeRecordDTO as TimeRecord } from "@/app/api/timeRecords/dto";
import { useCallback, useState } from "react";
import _groupBy from "lodash/groupBy";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import zhTwLocale from "@fullcalendar/core/locales/zh-tw";

interface Props {
  timeRecords: TimeRecord[];
  deleteTimeRecord: (id: string) => Promise<void>;
}
export const TimeRecordTable: React.FC<Props> = ({
  timeRecords,
  deleteTimeRecord,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [timeRecord, setTimeRecord] = useState<TimeRecord | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <FullCalendar
        locales={[zhTwLocale]}
        locale="zh-tw"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        selectable
        validRange={{
          start: dayjs().add(-3, "month").startOf("month").toDate(),
          end: dayjs().add(3, "month").endOf("month").toDate(),
        }}
        eventClick={(e) => {
          console.log(e, e.event, e.view, e.jsEvent);
          setTimeRecord(timeRecords.find((t) => t.id === e.event.id) || null);
        }}
        dayMaxEventRows={3}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        }}
        events={timeRecords.map((t) => ({
          id: t.id,
          title: t.name,
          date: t.datetime,
        }))}
      />
      {timeRecord && (
        <Dialog open onOpenChange={() => setTimeRecord(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <div className="p-4 flex flex-col gap-1 bg-white rounded-lg">
              <div className="text-xl font-bold mb-4">{timeRecord.name}</div>
              <div>日期時間: {timeRecord.datetime}</div>
              <div>地點: {timeRecord.location}</div>
              <div>
                <div>詳情:</div>
                <div className="text-xs text-gray-500 mt-2">
                  {timeRecord.details}
                </div>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Button
                className="text-white ml-auto"
                type="button"
                variant="destructive"
                onClick={async () => {
                  setIsDeleting(true)
                  await deleteTimeRecord(timeRecord.id);
                  setIsDeleting(false);
                  setTimeRecord(null);
                }}
              >
               {isDeleting ? "刪除中..." : "刪除"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
