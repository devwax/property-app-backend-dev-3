-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "status" TEXT,
    "address" TEXT NOT NULL DEFAULT E'',
    "lng" TEXT NOT NULL DEFAULT E'',
    "lat" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "address" TEXT NOT NULL DEFAULT E'',
    "lng" TEXT NOT NULL DEFAULT E'',
    "lat" TEXT NOT NULL DEFAULT E'',
    "listings" TEXT,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Listing_email_key" ON "Listing"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_email_key" ON "Agent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_listings_key" ON "Agent"("listings");

-- AddForeignKey
ALTER TABLE "Agent" ADD CONSTRAINT "Agent_listings_fkey" FOREIGN KEY ("listings") REFERENCES "Listing"("id") ON DELETE SET NULL ON UPDATE CASCADE;
