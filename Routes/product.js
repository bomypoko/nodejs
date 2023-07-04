// const express = require('express')
// const router = express.Router()

// const { read , list , create , update , remove } = require('../Controllers/product')

// router.get('/product' , list)
// router.get('/product/:id' , read)
// router.post('/product' , create)
// router.put('/product/:id' , update)
// router.delete('/product/:id' , remove)

// module.exports = router


const express = require('express')
const router = express.Router()


// ดึงข้อมูลทั้งหมด
router.get('/product' , (req,res) => {
    res.send('Ps5 , LG Sony')
})

router.get('/product/:id' , (req,res) => {
    res.send('PS5 Joy Stick By ID')
})


// ส่งข้อมูลเข้ามาบันทึก
router.post('/product' , (req,res) => {
    res.send('Post Product Endpoint ')
})


// Update ข้อมูล
router.put('/product/:id' , (req,res) => {
    res.send('Put product endpoint')
})

router.delete('/product/:id' , (req,res) => {
    res.json({ name: 'Bom' , id: 1 })
} )


module.exports = router