/*
  Warnings:

  - The values [RESOURCE] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('EXPO', 'ARTWORK');
ALTER TABLE "Post" ALTER COLUMN "type" TYPE "PostType_new" USING ("type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "image" TEXT NOT NULL;
