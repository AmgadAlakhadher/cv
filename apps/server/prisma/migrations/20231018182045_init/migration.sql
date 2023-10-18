/*
  Warnings:

  - You are about to drop the column `tagId` on the `project` table. All the data in the column will be lost.
  - Added the required column `tagId` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tag` DROP FOREIGN KEY `Tag_id_fkey`;

-- DropIndex
DROP INDEX `Project_tagId_key` ON `project`;

-- AlterTable
ALTER TABLE `project` DROP COLUMN `tagId`;

-- AlterTable
ALTER TABLE `tag` ADD COLUMN `tagId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
