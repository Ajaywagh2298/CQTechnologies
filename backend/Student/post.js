const { DBClient } = require('../dbConnect');

const createStudentDetails = (request,response) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    DBClient.query(`INSERT INTO student (first_name,last_name) VALUES ($1, $2)`,[firstName,lastName],(error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added successfully`)

    })

}

 module.exports ={ createStudentDetails };