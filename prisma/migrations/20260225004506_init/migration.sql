-- CreateEnum
CREATE TYPE "public"."SajuType" AS ENUM ('DAILY_NORMAL', 'NEW_YEAR');

-- CreateTable
CREATE TABLE "public"."saju_records" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "type" "public"."SajuType" NOT NULL,
    "version" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_public_id" TEXT NOT NULL,

    CONSTRAINT "saju_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "saju_records_public_id_key" ON "public"."saju_records"("public_id");

-- CreateIndex
CREATE INDEX "saju_records_user_public_id_idx" ON "public"."saju_records"("user_public_id");
