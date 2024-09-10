import { TimeRecord, activityType as ActivityEnum } from "@prisma/client";

export interface TimeRecordDTO extends Omit<TimeRecord, 'datetime' | 'activityType'>{
    datetime: string;
    activityType: string;
}

export function transformActivityTypeEnum(activityType: string) {
    switch (activityType) {
      case "WORK":
        return ActivityEnum.WORK;
      case "REST":
        return ActivityEnum.REST;
      case "SPORTS":
        return ActivityEnum.SPORTS;
      case "MEAL":
        return ActivityEnum.MEAL;
      case "FUN":
        return ActivityEnum.FUN;
      default:
        throw new Error("Invalid activity type");
    }
}

export function transformActivityType(activityType: ActivityEnum) {
  switch (activityType) {
    case ActivityEnum.WORK:
      return "WORK";
    case ActivityEnum.REST:
      return "REST";
    case ActivityEnum.SPORTS:
      return "SPORTS";
    case ActivityEnum.MEAL:
      return "MEAL";
    case ActivityEnum.FUN:
      return "FUN";
    default:
      throw new Error("Invalid activity type");
  }
}