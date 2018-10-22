-- scripts database

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `creationdate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `review` VARCHAR(200) NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`review_id`));

ALTER TABLE `reviews` ADD UNIQUE `unique_index`(`book_id`, `user_id`);

DROP TABLE IF EXISTS `suggestions`;
CREATE TABLE `suggestions` (
  `suggestion_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `book_id1` INT NOT NULL,
  `book_id2` INT NOT NULL,
  `reason` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`suggestion_id`));
ALTER TABLE `suggestions` ADD UNIQUE `unique_index`(`user_id`, `book_id1`, `book_id2`);

INSERT INTO reviews(book_id,user_id,review,grade) VALUES(1,1,"Muy buen libro",5),(2,2,"Mal libro",1),(1,3,"Libro normal",3),(2,1,"Libro pesimo",2);
INSERT INTO suggestions(user_id,book_id1,book_id2,reason) VALUES(1,1,2,"Mismo autor"),(1,2,1,"Mismo autor"),(1,3,4,"Ambos de accion"),(1,4,3,"Ambos de accion"),(1,1,4,"Ambos thriller"),(1,4,1,"Ambos thriller");