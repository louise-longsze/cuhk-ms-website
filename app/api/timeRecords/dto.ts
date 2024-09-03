import { TimeRecord } from "@prisma/client";

export interface TimeRecordDTO extends Omit<TimeRecord, 'datetime'>{
    datetime: string;
}