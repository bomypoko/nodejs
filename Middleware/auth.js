const jwt = require('jsonwebtoken')


exports.auth = async(req, res, next) =>{
    try {
        const token = req.headers["authtoken"]
        console.log(token)
        if(!token) {
            return res.status(401).send('No Token')
        }
        const decoded = jwt.verify(token,'jwtsecret')
        console.log(decoded)

        next();
        
    } catch (error) {
        console.log(error)
        res.send('Token Invalid').status(500)
    }
}