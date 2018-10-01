const mysql = require('mysql');
const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'reviews-db',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || 'reviewPassword',
	database: process.env.MYSQL_DATABASE || 'review_suggestions'
});
module.exports = function (app) {
    // get all reviews
    app.get('/get-reviews', (req, res) => {
        const query = 'SELECT * FROM reviews';
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    result: results
                });
            }
        });
    });

    // get review by ID
    app.get('/get-reviews/:id', (req, res) => {

        const query = 'SELECT * FROM reviews where review_id = ' + req.params.id;
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    result: results
                });
            }
        });
    });

    // get average grade by ID
    app.get('/get-average/:book_id', (req, res) => {

        const query = 'SELECT AVG(grade) FROM reviews where book_id = ' + req.params.book_id;
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    result: results
                });
            }
        });
    });

    // insert a review 
    app.post('/add-review', (req, res) => {
        const review = req.body;
        const query = 'INSERT INTO reviews(book_id,user_id,review,grade) values(?, ?, ?, ?)';

        connection.query(query, [review.book_id, review.user_id, review.review, review.grade], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully added review'
                });
            }
        });
    });

    // delete a review 
    app.delete('/delete-review', (req, res) => {
        const body = req.body;
        const query = 'delete from reviews where review_id = ?';

        connection.query(query, [body.review_id], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully deleted review'
                });
            }
        });
    });

    // update completely a review 
    app.put('/update-review', (req, res) => {
        const review = req.body;
        const queryupdate = 'update reviews set book_id = ? ,user_id = ?,review = ?,grade= ? where review_id = ?';

        connection.query(queryupdate, [review.book_id, review.user_id, review.review, review.grade, review.review_id], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully updated review'
                });
            }
        });
    });

    // update a review 
    /*app.put('/update-review', (req, res) => {
        const review = req.body;
        const reviewnew = req.body;
        var review;
        //Get review from database
        const queryget = 'SELECT * FROM reviews where review_id = ?';
        connection.query(queryget, [reviewnew.review_id], (err, review, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    message: 'Error occured'
                });
            } else {
                    review = results
            }
        });
        console.log(review);

        const queryupdate = 'update reviews set book_id = ? ,user_id = ?,review = ?,grade= ? where review_id = ?';

        connection.query(queryupdate, [review.book_id, review.user_id, review.review, review.grade, review.review_id], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully updated review'
                });
            }
        });
    });*/

    // get all suggestions
    app.get('/get-suggestions', (req, res) => {
        const query = 'SELECT * FROM suggestions';
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    result: results
                });
            }
        });
    });

    // get suggestion by ID
    app.get('/get-suggestions/:id', (req, res) => {

        const query = 'SELECT * FROM suggestions where suggestion_id = ' + req.params.id;
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    result: results
                });
            }
        });
    });

    // insert a suggestion 
    app.post('/add-suggestion', (req, res) => {
        const suggestion = req.body;
        const query = 'INSERT INTO suggestions(book_id1,book_id2) values(?, ?)';

        connection.query(query, [suggestion.book_id1, suggestion.book_id2], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully added suggestion'
                });
            }
        });
    });

    // delete a suggestion 
    app.delete('/delete-suggestion', (req, res) => {
        const body = req.body;
        const query = 'delete from suggestions where suggestion_id = ?';

        connection.query(query, [body.suggestion_id], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully deleted suggestion'
                });
            }
        });
    });

    // update completely a suggestion 
    app.put('/update-suggestion', (req, res) => {
        const suggestion = req.body;
        const queryupdate = 'update suggestions set book_id1 = ? ,book_id2 = ? where suggestion_id = ?';

        connection.query(queryupdate, [suggestion.book_id1, suggestion.book_id2,suggestion.suggestion_id], (err, results, fields) => {
            if (err) {
                console.error(err);
                res.json({
                    success: false,
                    message: 'Error occured'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successfully updated suggestion'
                });
            }
        });
    });
}