-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:4303
-- Generation Time: May 09, 2018 at 06:07 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `firstdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `table 9`
--

CREATE TABLE `table 9` (
  `COSING_Ref_No` int(5) DEFAULT NULL,
  `INCI_name` varchar(1929) DEFAULT NULL,
  `INN_name` varchar(50) DEFAULT NULL,
  `Ph_Eur_Name` varchar(46) DEFAULT NULL,
  `CAS_No` varchar(127) DEFAULT NULL,
  `EC_No` varchar(88) DEFAULT NULL,
  `Chem_IUPAC_Name_Description` varchar(2178) DEFAULT NULL,
  `Restriction` varchar(660) DEFAULT NULL,
  `FunctionChemical` varchar(275) DEFAULT NULL,
  `Update_Date` varchar(1179) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
