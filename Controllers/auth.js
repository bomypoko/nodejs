
exports.createUser = async( req , res ) => {
    res.send('hello Auth')
}

// exports.createUser = async( req,res) => {
//     console.log(req.body)
//     const newUser = await CreateNewUser(req.body).save()
//     res.send(newUser)
// }