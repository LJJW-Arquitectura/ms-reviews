const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '172.17.0.3',
    user: 'root',
    password: 'reviewPassword',
    database: 'review_suggestions'
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

}