const Users = require('../Models/authentication')



exports.createUser = async( req , res ) => {
    try {
        const newuser = await Users(req.body).save()
        res.send(newuser)
    } catch (error) {
        console.log(500).send('the server is not responding')
    }
}
exports.userid = async(req,res) => {
    try {
        await res.send('Ratchasri Kidking')
    } catch (error) {
        res.send(500).sent('the server is not responding')
    }
}




// exports.createUser = async( req,res) => {
//     console.log(req.body)
//     const newUser = await CreateNewUser(req.body).save()
//     res.send(newUser)
// }