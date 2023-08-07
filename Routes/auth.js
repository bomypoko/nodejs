const express = require('express')
const router = express.Router()


const { createUser } = require('../Controllers/auth')


router.get('/auth',createUser )  




module.exports = router
