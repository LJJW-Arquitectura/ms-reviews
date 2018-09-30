-- Host: localhost    Database: test
--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `creationdate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `review` VARCHAR(60) NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`review_id`));

DROP TABLE IF EXISTS `suggestions`;
CREATE TABLE `suggestions` (
  `id_suggestion` INT NOT NULL AUTO_INCREMENT,
  `book_id1` INT NOT NULL,
  `book_id2` INT NOT NULL,
  PRIMARY KEY (`id_suggestion`));

/*
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `rollNo` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rollNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `students` WRITE;
INSERT INTO `students` VALUES (1130328,'Varun Kumar');
UNLOCK TABLES;
*/