/*
  Warnings:

  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tag` DROP FOREIGN KEY `Tag_tagId_fkey`;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `tags` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `tag`;
