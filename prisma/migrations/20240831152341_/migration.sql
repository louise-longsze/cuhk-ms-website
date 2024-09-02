/*
  Warnings:

  - You are about to drop the `Facility` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PlaceStatus" AS ENUM ('Active', 'Inactive', 'Renovating');

-- DropTable
DROP TABLE "Facility";

-- DropEnum
DROP TYPE "FacilityStatus";

-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gov_url" TEXT,
    "facilities" TEXT,
    "photo_path" TEXT NOT NULL,
    "status" "PlaceStatus" NOT NULL DEFAULT 'Active',

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);
