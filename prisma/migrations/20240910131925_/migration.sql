/*
  Warnings:

  - Added the required column `endAt` to the `TimeRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeRecord" ADD COLUMN     "dbp" INTEGER NOT NULL DEFAULT 80,
ADD COLUMN     "endAt" TIMESTAMP(3),
ADD COLUMN     "pulse" INTEGER NOT NULL DEFAULT 80,
ADD COLUMN     "sbp" INTEGER NOT NULL DEFAULT 80;


UPDATE "TimeRecord" SET "endAt" = NOW() WHERE "endAt" IS NULL;
ALTER TABLE "TimeRecord" ALTER COLUMN "endAt" SET NOT NULL;
