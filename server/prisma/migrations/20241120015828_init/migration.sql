/*
  Warnings:

  - You are about to drop the `PucharseSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PucharseSummary";

-- CreateTable
CREATE TABLE "PurcharseSummary" (
    "purchaseSummaryId" TEXT NOT NULL,
    "totalPurchased" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurcharseSummary_pkey" PRIMARY KEY ("purchaseSummaryId")
);
