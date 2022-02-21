/*
  Warnings:

  - You are about to drop the column `nom` on the `Card` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileName` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Card_nom_key` ON `Card`;

-- AlterTable
ALTER TABLE `Card` DROP COLUMN `nom`,
    ADD COLUMN `fileName` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Card_name_key` ON `Card`(`name`);
