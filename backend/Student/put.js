const {DBClient} = require("../dbConnect");
const updateStudentDetails = (req, res) =>{
 const id = req.params.id;
 const {firstName, lastName} = req.body;

 DBClient.query(`UPDATE student SET first_name = $1,last_name = $2 WHERE student_id= $3`,[firstName,lastName,id],
     (error, results) => {
         if (error) {
             res.status(404).json(error)
         }else{
             res.status(200).send(`Student modified with ID: ${id}`)
         }
 })
}
module.exports = {updateStudentDetails}