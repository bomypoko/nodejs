const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.register = async(req,res)=>{

// check user , encrypt , save
    try {

        const { username , password } = req.body
        var exisTingUser = await User.findOne({ username })
        if(exisTingUser){
            res.send('Existing User')
        }

        const salt = await bcrypt.genSalt(5)
        exisTingUser = new User({
            username,
            password
        })
        exisTingUser.password = await bcrypt.hash(password, salt)
        console.log(exisTingUser)




        res.send(req.body)

       

        
    } catch (error) {
        console.log(error)
        res.send(500).send('the server is down')
    }
    // try {
        
    //     const { username , password } = req.body
    //     var existingUser = await User.findOne({username})

    //     if(existingUser){
    //         return res.send('This user is already exists!! Please Login' )
    //     }
       
    //     //2 Encrypt password
    //     const salt = await bcrypt.genSalt(10)
    //     user = new User({
    //         username,
    //         password
    //     })
    //     user.password = await bcrypt.hash(password , salt)
    //     console.log(user)

    //     //3 Save to db
    //     await user.save()
    //     res.send('Register Successful')
    
    // } catch (error) {
    //     console.log('err')
    //     res.status(500)
    //     res.send('the server is not responding')
    // }
}



exports.login = async(req,res) => {
    try {
        // 1 Check User if there is user in the DB and update login Timestampt
        const { name , password } = req.body;
        var user = await User.findOneAndUpdate({ name }, { $set: { lastLogin: new Date() } }, { new: true })
        console.log(user)
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password); 

            if(!isMatch) {
                return res.status(400).send('invalid password')
            }
        }

        console.log(user.password)
        res.send('Welcome new user')
        
    } catch (error) {
        console.log(error)
        res.status(500).send('An error occurred on the server');
    }

    
}









