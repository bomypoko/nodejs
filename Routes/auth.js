const express = require('express')
const router = express.Router()

router.get('/auth' , (req,res) => {
    res.send('Login , Passport')
})




module.exports = router