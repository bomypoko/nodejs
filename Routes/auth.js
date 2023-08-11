const express = require('express')
const router = express.Router()


const { createUser , userid  } = require('../Controllers/auth')


router.post('/auth',createUser )  
router.get('/auth/:id', userid)




module.exports = router
