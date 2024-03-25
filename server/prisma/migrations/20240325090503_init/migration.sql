/*
  Warnings:

  - The `userName` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "userName",
ADD COLUMN     "userName" TEXT[];
