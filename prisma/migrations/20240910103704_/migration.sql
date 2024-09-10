/*
  Warnings:

  - The values [IDLE,WORK,REST,SPORTS,MEAL,FUN] on the enum `activityType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "activityType_new" AS ENUM ('WALKING', 'TAI_JI', 'STRETCHING', 'FAST_WALK', 'SWIMMING', 'RACING', 'RUNNING', 'YOGA', 'GOLF', 'BALL', 'DANCE', 'HIKING', 'TENNIS', 'BOXING');
ALTER TABLE "TimeRecord" DROP COLUMN "activityType";
ALTER TABLE "Activity" DROP COLUMN "activityType";
ALTER TABLE "Activity" ADD COLUMN "activityType" "activityType_new" NOT NULL DEFAULT 'WALKING';
ALTER TABLE "TimeRecord" ADD COLUMN "activityType" "activityType_new" NOT NULL DEFAULT 'WALKING';
ALTER TYPE "activityType" RENAME TO "activityType_old";
ALTER TYPE "activityType_new" RENAME TO "activityType";
DROP TYPE "activityType_old";
ALTER TABLE "TimeRecord" ALTER COLUMN "activityType" SET DEFAULT 'WALKING';
ALTER TABLE "Activity" ALTER COLUMN "activityType" SET DEFAULT 'WALKING';
COMMIT;

-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "activityType" SET DEFAULT 'WALKING';

-- AlterTable
ALTER TABLE "TimeRecord" ALTER COLUMN "activityType" SET DEFAULT 'WALKING';
