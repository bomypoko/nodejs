
const express = require('express')
const router = express.Router()
const { read , list , create , remove , update  } = require('../Controllers/product')

// ดึงข้อมูลทั้งหมด
router.get('/product/:id' , read)
router.get('/product/', list)

// ส่งข้อมูลเข้ามาบันทึก
router.post('/product' , create)

// Update ข้อมูล
router.put('/product/:id', update)

router.delete('/product/:id' , remove)

module.exports = router