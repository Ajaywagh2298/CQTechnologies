const { DBClient } = require('../dbConnect');

const createBookDetails = (request,response) => {
    const { bookName, autherName, studentName, dateBorrow, DateReturn } = request.body
    DBClient.query(`INSERT INTO books (book_name,auther_name,student_name,date_of_borrow,date_return) VALUES ($1, $2, $3, $4, $5)`,[bookName, autherName, studentName, dateBorrow, DateReturn],(error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Book added successfully`)

    })

}

module.exports ={ createBookDetails };