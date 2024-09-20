import { BloodSugar } from "@prisma/client";

export interface BloodSugarDTO extends Omit<BloodSugar, "datetime"> {
  datetime: string;
}