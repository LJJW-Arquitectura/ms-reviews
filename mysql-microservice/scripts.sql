-- scripts database

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `creationdate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `review` VARCHAR(60) NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`review_id`));

ALTER TABLE `reviews` ADD UNIQUE `unique_index`(`book_id`, `user_id`);

DROP TABLE IF EXISTS `suggestions`;
CREATE TABLE `suggestions` (
  `suggestion_id` INT NOT NULL AUTO_INCREMENT,
  `book_id1` INT NOT NULL,
  `book_id2` INT NOT NULL,
  PRIMARY KEY (`suggestion_id`));
ALTER TABLE `suggestions` ADD UNIQUE `unique_index`(`book_id1`, `book_id2`);

INSERT INTO reviews(book_id,user_id,review,grade) VALUES(1,1,"Muy buen libro",5),(2,2,"Mal libro",1),(1,3,"Libro normal",3),(2,1,"Libro pesimo",2);
INSERT INTO suggestions(book_id1,book_id2) VALUES(1,2),(3,4),(1,4),(2,3);