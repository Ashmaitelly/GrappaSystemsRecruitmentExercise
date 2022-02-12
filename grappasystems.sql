-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2022 at 11:16 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grappasystems`
--

-- --------------------------------------------------------

--
-- Table structure for table `cast`
--

CREATE TABLE `cast` (
  `MovieID` int(12) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `MiddleName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Biography` varchar(345) NOT NULL,
  `ThumbnailURL` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cast`
--

INSERT INTO `cast` (`MovieID`, `FirstName`, `MiddleName`, `LastName`, `Biography`, `ThumbnailURL`) VALUES
(1, 'Andrew', 'Russell', 'Garfield', 'Andrew Russell Garfield is a British-American actor. An alumnus of the Royal Central School of Speech and Drama, he has won some of the most prestigious awards in the industry, including a Tony Award, a British Academy Television Award, and a Golden Globe Award.', 'ag.jpg'),
(1, 'Jesse', 'Adam', 'Eisenberg', 'Jesse Adam Eisenberg is an American actor and playwright. He made his television debut with the short-lived comedy-drama series Get Real.', 'je.jpg'),
(2, 'Bruce', 'Lorne', 'Campbell', 'Bruce Lorne Campbell is an American actor, director, producer and writer. He is known for portraying Ash Williams in Sam Raimi\'s Evil Dead franchise, beginning with the 1978 short film Within the Woods.', 'bc.jpg'),
(2, 'Embeth', ' Jean', ' Davidtz', 'Embeth Jean Davidtz is a American-South African actress. Her screen roles include movies such as Army of Darkness, Schindler\'s List, Matilda, Mansfield Park, Bicentennial Man, Fallen, Junebug, and Fracture, and the television series Mad Men, Californication, In Treatment, and Ray Donovan.', 'ed.jpg'),
(3, 'Alan ', ' Sidney Patrick', 'Rickman', 'Alan Rickman was an English actor of the stage and screen. Rickman gained international acclaim for his role as Severus Snape in the Harry Potter film series and Hans Gruber in the action film Die Hard.', 'ar.jpg'),
(3, 'Bruce', 'Walter', 'Willis', 'Actor and musician Bruce Willis is well known for playing wisecracking or hard-edged characters, often in spectacular action films. Collectively, he has appeared in films that have grossed in excess of $2.5 billion USD, placing him in the top ten stars in terms of box office receipts.', 'bw.jpg'),
(4, 'Alfred', 'Esteban', 'Molina', 'Alfred Molina is an English actor known for his work on the stage and screen. He first rose to prominence in the West End, earning a nomination for the Laurence Olivier Award for Best Newcomer in a Play for his performance in the production of Oklahoma! in 1980.', 'am.jpg'),
(4, 'Tobey', ' Vincent', ' Maguire', 'Tobias Vincent Maguire is an American actor and film producer. He is best known for playing the title character from Sam Raimi\'s Spider-Man trilogy, a role he later reprised in Spider-Man: No Way Home.', 'tm.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `ID` int(12) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `ThumbnailURL` varchar(128) NOT NULL,
  `Plot` varchar(1028) NOT NULL,
  `VideoURL` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`ID`, `Title`, `ThumbnailURL`, `Plot`, `VideoURL`) VALUES
(1, 'The Social Network', 'movie1.jpg', 'In 2003, Harvard undergrad and computer genius Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, he is one of the youngest billionaires ever, but Zuckerberg finds that his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend. Based on the book \"The Accidental Billionaires.\"', 'https://www.youtube.com/embed/lB95KLmpLR4'),
(2, 'Army of Darkness', 'movie2.jpg', 'A sardonic hardware store clerk is accidentally transported to 1300 A.D., where he must retrieve the Necronomicon and battle an army of the dead so he can return home.', 'https://www.youtube.com/embed/4vvJCg2JsIc'),
(3, 'Die Hard', 'movie3.jpg', 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.', 'https://www.youtube.com/embed/gYWvwkXreaI'),
(4, 'Spider-man 2', 'movie4.jpg', 'Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.', 'https://www.youtube.com/embed/1s9Yln0YwCw');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cast`
--
ALTER TABLE `cast`
  ADD PRIMARY KEY (`MovieID`,`FirstName`,`MiddleName`,`LastName`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
