
const {DBClient} = require('../dbConnect');

//---------------------------------------------------- LIST OF ALL STUDENT -----------------------------------------------
const listStudent =(req, res) =>{
 DBClient.query('SELECT * FROM student',
     (err,result) =>{
         if (err) {
             res.status(404).json(err)
         }else{
             res.status(200).json(result.rows)
         }
 })
}

//--------------------------------------------------- INDIVIDUAL STUDENT DETAILS ------------------------------------------
const individualStudent =(req, res) =>{
    const id = parseInt(req.params.id);

    DBClient.query(`SELECT * FROM student WHERE student_id = $1`,[id],
        (error, results) => {
            if (error) {
                res.status(404).json(error)
            }else{
                res.status(200).json(results.rows)
            }
    })
}
module.exports = { listStudent, individualStudent }