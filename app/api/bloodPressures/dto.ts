import { BloodPressure } from "@prisma/client";

export interface BloodPressureDTO extends Omit<BloodPressure, "datetime"> {
  datetime: string;
}