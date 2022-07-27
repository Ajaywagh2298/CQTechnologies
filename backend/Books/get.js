
const {DBClient} = require('../dbConnect');

//---------------------------------------------------- LIST OF ALL BOOKS -----------------------------------------------
const listBooks =(req, res) =>{
    DBClient.query('SELECT * FROM books',
        (err,result) =>{
            if (err) {
                res.status(404).json(err)
            }else{
                res.status(200).json(result.rows)
            }
        })
}

//--------------------------------------------------- INDIVIDUAL BOOK DETAILS ------------------------------------------
const individualBook =(req, res) =>{
    const id = parseInt(req.params.id);

    DBClient.query(`SELECT * FROM books WHERE book_id = $1`,[id],
        (error, results) => {
            if (error) {
                res.status(404).json(error)
            }else{
                res.status(200).json(results.rows)
            }
        })
}
module.exports = { listBooks, individualBook }