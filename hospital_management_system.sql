-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2023-09-27 14:10:08
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.5.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital_management_system`
--

-- --------------------------------------------------------

--
-- 表的结构 `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subtype` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `accounts`
--

INSERT INTO `accounts` (`id`, `age`, `birthday`, `details`, `email_id`, `first_name`, `gender`, `last_name`, `password`, `phone`, `subtype`, `type`) VALUES
(1, 35, '1988-01-01', NULL, 'doctor@gmail.com', 'Tom', 'male', 'Cat', '1234', '1234567890', NULL, 'DOCTOR');

-- --------------------------------------------------------

--
-- 表的结构 `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `doctor_name` varchar(255) DEFAULT NULL,
  `fee` bigint(20) DEFAULT NULL,
  `person_id` bigint(20) DEFAULT NULL,
  `person_name` varchar(255) DEFAULT NULL,
  `time` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `appointments`
--

INSERT INTO `appointments` (`id`, `date`, `details`, `doctor_id`, `doctor_name`, `fee`, `person_id`, `person_name`, `time`) VALUES
(1, '20230927', NULL, 1, 'Tom Cat', 50, 2, 'Test User', 900),
(2, '20230926', NULL, 1, 'Tom Cat', 50, 2, 'Test User', 1000),
(3, '20230927', NULL, 1, 'Tom Cat', 50, 2, 'Test User', 1400),
(4, '20230927', NULL, 1, 'Tom Cat', 50, 2, 'Test User', 1100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
