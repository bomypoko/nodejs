const express = require('express')
const router = express.Router()

const  { register , login }  = require('../Controllers/auth')


// const { createUser , userid  } = require('../Controllers/auth')

// router.get('/auth/:id', userid)

// router.post('/register',createUser )  

router.post('/register' , register )

router.post('/login', login)



module.exports = router
