const User = require('../Models/User')
const bcrypt = require('bcryptjs')

exports.register = async(req,res)=>{
    try {
        //Destructuring Username and Password
        const { username , password } = req.body
        // ต้องใช้ var เพราะ User มีการเปลี่ยนแปลงค่า ถ้าเป็น const มันจะเป็นค่าคงที่
        const existingUser = await User.findOne({username})
       
        // Check new user if there is exist.

        if(existingUser){
            return res.send('This user is already exists!!').status(400)
        }
       
        //2 Encrypt password
        const salt = await bcrypt.genSalt(10)
        const user = new User({
            username,
            password
        })
        user.password = await bcrypt.hash(password , salt)

        //3 Save to db
        await user.save()
        res.send('Register Successful')
    
    } catch (error) {
        console.log('err')
        res.status(500)
        res.send('the server is not responding')
    }
}
exports.login = async(req,res)=>{
    try {
        res.send('hello login controller')
    } catch (error) {
        console.log('err')
        res.status(500)
        res.send('the server is not responding')
        
    }
}







// const Users = require('../Models/authentication')



// exports.createUser = async( req , res ) => {
//     try {
//         const newuser = await Users(req.body).save()
//         res.send(newuser)
//     } catch (error) {
//         console.log(500).send('the server is not responding')
//     }
// }
// exports.userid = async(req,res) => {
//     try {
//         await res.send('Ratchasri Kidking')
//     } catch (error) {
//         res.send(500).sent('the server is not responding')
//     }
// }




// exports.createUser = async( req,res) => {
//     console.log(req.body)
//     const newUser = await CreateNewUser(req.body).save()
//     res.send(newUser)
// }