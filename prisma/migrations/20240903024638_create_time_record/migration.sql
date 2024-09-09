-- CreateTable
CREATE TABLE "TimeRecord" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "location" TEXT,
    "datetime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimeRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TimeRecord_authorId_idx" ON "TimeRecord"("authorId");

-- AddForeignKey
ALTER TABLE "TimeRecord" ADD CONSTRAINT "TimeRecord_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
