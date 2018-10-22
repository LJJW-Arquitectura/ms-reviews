-- scripts database

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `booktitle` VARCHAR(200) NOT NULL,
  `user_id` INT NOT NULL,
  `username` VARCHAR(200) NOT NULL,
  `creationdate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `review` VARCHAR(200) NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`review_id`));

ALTER TABLE `reviews` ADD UNIQUE `unique_index`(`book_id`, `user_id`);

DROP TABLE IF EXISTS `suggestions`;
CREATE TABLE `suggestions` (
  `suggestion_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `username` VARCHAR(200) NOT NULL,
  `book_id1` INT NOT NULL,
  `booktitle1` VARCHAR(200) NOT NULL,
  `book_id2` INT NOT NULL,
  `booktitle2` VARCHAR(200) NOT NULL,
  `reason` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`suggestion_id`));
ALTER TABLE `suggestions` ADD UNIQUE `unique_index`(`user_id`, `book_id1`, `book_id2`);