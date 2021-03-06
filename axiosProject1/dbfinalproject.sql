-- MySQL Script generated by MySQL Workbench
-- Kam 17 Mei 2018 01:03:20  WIB
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project` DEFAULT CHARACTER SET utf8mb4 ;
USE `project` ;

-- -----------------------------------------------------
-- Table `project`.`histori_kamar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`histori_kamar` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nama_pasien` VARCHAR(200) NULL DEFAULT NULL,
  `nama_ruangan` VARCHAR(200) NULL DEFAULT NULL,
  `nomor_kamar` INT(11) NULL DEFAULT NULL,
  `tanggal_keluar` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tanggal_masuk` DATETIME NULL DEFAULT NULL,
  `status_kamar` VARCHAR(20) NULL DEFAULT 'Checkout',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project`.`kamar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`kamar` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_status_kamar` INT(11) NULL DEFAULT NULL,
  `tipe` VARCHAR(20) NULL DEFAULT NULL,
  `nama_ruangan` VARCHAR(200) NULL DEFAULT NULL,
  `nomor_kamar` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project`.`pasien`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`pasien` (
  `id` VARCHAR(30) NOT NULL,
  `nama_pasien` VARCHAR(200) NULL DEFAULT NULL,
  `tanggal_lahir` DATE NULL DEFAULT NULL,
  `umur` INT(11) NULL DEFAULT NULL,
  `agama` VARCHAR(30) NULL DEFAULT NULL,
  `jenis_kelamin` VARCHAR(30) NULL DEFAULT NULL,
  `alamat` VARCHAR(200) NULL DEFAULT NULL,
  `telepon` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project`.`pesan_kamar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`pesan_kamar` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_pasien` VARCHAR(30) NULL DEFAULT NULL,
  `id_kamar` INT(11) NULL DEFAULT NULL,
  `penanggung_jawab` VARCHAR(200) NULL DEFAULT NULL,
  `tanggal_masuk` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project`.`status_kamar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`status_kamar` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `keterangan` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `project`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `role` INT(11) NULL DEFAULT NULL,
  `adminapproved` TINYINT(1) NULL DEFAULT NULL,
  `username` VARCHAR(200) NULL DEFAULT NULL,
  `password` VARCHAR(400) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
