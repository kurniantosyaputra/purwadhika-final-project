-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `histori_kamar`
--

DROP TABLE IF EXISTS `histori_kamar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `histori_kamar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_pasien` varchar(200) DEFAULT NULL,
  `nama_ruangan` varchar(200) DEFAULT NULL,
  `nomor_kamar` int(11) DEFAULT NULL,
  `tanggal_keluar` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tanggal_masuk` datetime DEFAULT NULL,
  `status_kamar` varchar(20) DEFAULT 'Checkout',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `histori_kamar`
--

LOCK TABLES `histori_kamar` WRITE;
/*!40000 ALTER TABLE `histori_kamar` DISABLE KEYS */;
INSERT INTO `histori_kamar` VALUES (1,'Maunala Kemal','Fathimah',302,'2018-05-13 11:01:49','2018-10-10 00:00:00','Checkout'),(2,'Anthon Apanya','Khadijah',202,'2018-05-13 12:34:43','2018-01-17 00:00:00','Checkout'),(3,'Meisyaroh Masyita','Khadijah',202,'2018-05-14 15:00:32','2018-12-07 00:00:00','Checkout'),(4,'Vincent Utama','Khadijah',201,'2018-05-15 07:46:50','2018-05-07 00:00:00','Checkout'),(5,'Pandu Chandra Winata','Fathimah',302,'2018-05-15 10:40:32','2018-05-15 00:00:00','Checkout'),(6,'Ryando Pana ','Fathimah',303,'2018-05-16 03:01:20','2018-05-16 00:00:00','Checkout'),(7,'baron','Fathimah',303,'2018-05-16 06:45:36','2018-05-16 00:00:00','Checkout');
/*!40000 ALTER TABLE `histori_kamar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kamar`
--

DROP TABLE IF EXISTS `kamar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kamar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_status_kamar` int(11) DEFAULT NULL,
  `tipe` varchar(20) DEFAULT NULL,
  `nama_ruangan` varchar(200) DEFAULT NULL,
  `nomor_kamar` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kamar`
--

LOCK TABLES `kamar` WRITE;
/*!40000 ALTER TABLE `kamar` DISABLE KEYS */;
INSERT INTO `kamar` VALUES (12,1,'VIP','Fathimah','303'),(13,1,'Kelas 1','Fathimah','304'),(14,1,'kelas 1','khadijah','305');
/*!40000 ALTER TABLE `kamar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pasien`
--

DROP TABLE IF EXISTS `pasien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pasien` (
  `id` varchar(30) NOT NULL,
  `nama_pasien` varchar(200) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `umur` int(11) DEFAULT NULL,
  `agama` varchar(30) DEFAULT NULL,
  `jenis_kelamin` varchar(30) DEFAULT NULL,
  `alamat` varchar(200) DEFAULT NULL,
  `telepon` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pasien`
--

LOCK TABLES `pasien` WRITE;
/*!40000 ALTER TABLE `pasien` DISABLE KEYS */;
INSERT INTO `pasien` VALUES ('414214759','Meisyaroh Masyita','1994-06-17',24,'Islam','Perempuan','Jl. Padang Raya',852671),('41610122','Coba','2018-05-14',0,'Islam','Laki-Laki','hghg',7676),('416134770','baron','2018-05-08',0,'-','Laki-Laki','xyx',9800);
/*!40000 ALTER TABLE `pasien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pesan_kamar`
--

DROP TABLE IF EXISTS `pesan_kamar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pesan_kamar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pasien` varchar(30) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL,
  `penanggung_jawab` varchar(200) DEFAULT NULL,
  `tanggal_masuk` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pesan_kamar`
--

LOCK TABLES `pesan_kamar` WRITE;
/*!40000 ALTER TABLE `pesan_kamar` DISABLE KEYS */;
INSERT INTO `pesan_kamar` VALUES (1,'41513746',11,'Budi Santoso','2018-05-16 00:00:00'),(2,'4151488',10,'Dendi Pemain Dota','2018-05-16 00:00:00'),(3,'44155877',9,'anton','2018-05-16 00:00:00');
/*!40000 ALTER TABLE `pesan_kamar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_kamar`
--

DROP TABLE IF EXISTS `status_kamar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_kamar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keterangan` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_kamar`
--

LOCK TABLES `status_kamar` WRITE;
/*!40000 ALTER TABLE `status_kamar` DISABLE KEYS */;
INSERT INTO `status_kamar` VALUES (1,'Tersedia'),(2,'Terisi'),(3,'Renovasi'),(4,'Dirapikan'),(5,'Booking');
/*!40000 ALTER TABLE `status_kamar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` int(11) DEFAULT NULL,
  `adminapproved` tinyint(1) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,1,1,'putra_cool','b6e6459da84030b0ac97fb121e3c1c2969c119b8ca6cc49d373ad2c21242fa24'),(18,1,1,'papa_nakal','b6e6459da84030b0ac97fb121e3c1c2969c119b8ca6cc49d373ad2c21242fa24'),(19,1,0,'hafas_jahat','b6e6459da84030b0ac97fb121e3c1c2969c119b8ca6cc49d373ad2c21242fa24'),(20,1,0,'baron','88e8b1db941cc4da0bc829bf08095357b1a904b8cfa847d1eed174d2f69e1f38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-17 12:29:54
