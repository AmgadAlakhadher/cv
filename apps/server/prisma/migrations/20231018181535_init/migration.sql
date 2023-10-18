/*
  Warnings:

  - The values [MANAGER,WORKER,SELLER_ONLINE_STORE,SELLER_MARKETPLACE] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `_projecttotag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tagId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_projecttotag` DROP FOREIGN KEY `_ProjectToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_projecttotag` DROP FOREIGN KEY `_ProjectToTag_B_fkey`;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `tagId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('ADMIN') NOT NULL DEFAULT 'ADMIN';

-- DropTable
DROP TABLE `_projecttotag`;

-- CreateIndex
CREATE UNIQUE INDEX `Project_tagId_key` ON `Project`(`tagId`);

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_id_fkey` FOREIGN KEY (`id`) REFERENCES `Project`(`tagId`) ON DELETE RESTRICT ON UPDATE CASCADE;
