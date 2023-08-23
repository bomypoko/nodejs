const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Start Register 
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
        console.log(user)

        //3 Save to db
        await user.save()
        res.send('Register Successful')
    
    } catch (error) {
        console.log('err')
        res.status(500)
        res.send('the server is not responding')
    }
}
// End Register

/// ---------------- Start Login ----------/// 

exports.login = async(req,res) => {
    try {
        // 1 Check User if there is user in system already
        const { name , password } = req.body
        var user = await User.findOneAndUpdate({ name }, { new: true })
        console.log(user)
        

        if(user) {
            const isMatch = await bcrypt.compare(password,user.password)

            if(!isMatch){
                return res.status(400).send('password is not Invalid')
            }
        }
        res.send('hello login')
        
    } catch (error) {
        console.log(error)
        res.send(500).send('the server is not responding ')
    }

    
}









