-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Värd: 10.209.2.38
-- Skapad: 08 jan 2020 kl 11:49
-- Serverversion: 5.5.52
-- PHP-version: 5.3.10-1ubuntu3.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `245390-nmsn`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `FRIENDS`
--

CREATE TABLE IF NOT EXISTS `FRIENDS` (
  `user1` int(11) NOT NULL,
  `user2` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `accepted` int(11) NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `FRIENDS`
--

INSERT INTO `FRIENDS` (`user1`, `user2`, `date`, `accepted`) VALUES
(2, 1, '2020-01-07 12:51:34', 1),
(4, 2, '2020-01-07 13:42:47', 0),
(2, 3, '2020-01-07 13:46:43', 3),
(11, 2, '2020-01-07 15:02:02', 1),
(1, 11, '2020-01-07 17:22:09', 3),
(12, 2, '2020-01-07 19:03:20', 1);

-- --------------------------------------------------------

--
-- Tabellstruktur `MESSAGES`
--

CREATE TABLE IF NOT EXISTS `MESSAGES` (
  `receiver` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `text` varchar(200) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `MESSAGES`
--

INSERT INTO `MESSAGES` (`receiver`, `sender`, `text`, `time`) VALUES
(11, 2, 'hej', '2020-01-07 15:13:35');

-- --------------------------------------------------------

--
-- Tabellstruktur `USER`
--

CREATE TABLE IF NOT EXISTS `USER` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `namn` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pw` varchar(30) NOT NULL,
  `pic` varchar(50) NOT NULL,
  `loggedIn` int(11) NOT NULL DEFAULT '0',
  `status` varchar(50) NOT NULL DEFAULT 'Welcome to NMSN :)',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumpning av Data i tabell `USER`
--

INSERT INTO `USER` (`ID`, `namn`, `email`, `pw`, `pic`, `loggedIn`, `status`) VALUES
(2, 'Elisabeth', 'elisabethnystroms@gmail.com', 'elisabeth', '', 0, 'TJENA, skriv inte till mig om buggar :''))'),
(11, 'Max', 'maxsandin@gmail.com', 'max', '', 0, 'Rainbow Popcorn at your service'),
(12, 'Hallon', 'hallon@gmail.com', 'hallon', '', 0, 'Welcome to NMSN :)');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
