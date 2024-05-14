-- CreateTable
CREATE TABLE "Partner" (
    "id" SERIAL NOT NULL,
    "tradingName" TEXT,
    "ownerName" TEXT,
    "document" TEXT NOT NULL,
    "coverageArea" JSONB NOT NULL,
    "address" JSONB NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Partner_document_key" ON "Partner"("document");
