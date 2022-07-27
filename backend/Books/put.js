const {DBClient} = require("../dbConnect");
const updateBookDetails = (req, res) =>{
    const id = req.params.id;
    const { bookName, autherName, studentName, dateBorrow, DateReturn } = req.body;

    DBClient.query(`UPDATE books SET book_name = $1,auther_name = $2,student_name= $3, date_of_borrow = $4,date_return = $5 WHERE book_id= $6`,[bookName, autherName, studentName, dateBorrow, DateReturn,id],
        (error, results) => {
            if (error) {
                res.status(404).json(error)
            }else{
                res.status(200).send(`Book modified with ID: ${id}`)
            }
        })
}
module.exports = { updateBookDetails }