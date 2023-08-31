const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.register = async(req,res)=>{

// check user , encrypt , save
    try {

        const { username , password } = req.body
        var exisTingUser = await User.findOne({ username })
        if(exisTingUser){
            return res.send('The User is already existing')
        }

        const salt = await bcrypt.genSalt(5)
        exisTingUser = new User({
            username,
            password
        })
        exisTingUser.password = await bcrypt.hash(password, salt)
        await exisTingUser.save()
        res.send('Register Successful')

        
    } catch (error) {
        console.log(error)
        res.send(500).send('the server is down')
    }
  
}
exports.login = async(req,res) => {
            // Check User Password
    try {
        const {username , password} = req.body
        const existingUser = await User.findOneAndUpdate({ username}, {new: true})

            if(existingUser) {
                const isMatch = await bcrypt.compare(password, existingUser.password)
            
                if(!isMatch) {
                return res.send('Invalid Password')
                }
                 // 2. payload
                var payload={
                    existingUser:{
                    name: existingUser.username
                      }
                }
                // 3. generate Token
                jwt.sign(payload, 'jwtsecret', { expiresIn: 20} , (err, token) => {
                    if(err) throw err;
                    res.json({token, payload })
                })
            }else {
                return res.status(400).send('User not Found!!!')
            }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('the server is not responding')
    }

    
}









