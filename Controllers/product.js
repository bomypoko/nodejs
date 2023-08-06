

const Products = require('../Models/Product')

exports.read = async(req,res) => {
    try {
        await res.send('PlayStation5 , SonyTV , MotorBike , Shoe , Shirt , Ski')
    } catch (error) {
        res.send('The server is no responding').send(500)
    }
}
exports.list = async(req , res) => {
    try {
        await res.send('Football')
    } catch (error) {
        res.send('The server is no responding').send(500)
    }
}

exports.update = async(req ,res) => {
    try {
        await res.send('Update Complete')
    } catch (error) {
        res.send(500).send('the server is not responding')
    }
}

// กำลังจะเชื่อมต่อกับฐานข้อมูล

// exports.create = async(req,res) => {
//     try {
//         await res.send('Your Account is Created')
//     } catch (error) {
//         res.send(500).send('The server is not responding')
//     }
// }

// Save Data to Mongodb
exports.create = async(req,res) => {
    try {
        console.log(req.body)
        const createproduct = await Products(req.body).save()
        res.send(createproduct)

    } catch (error) {
        console.log('the server is not responding')
    }
}


exports.remove = async(req,res) => {
    try {
        await res.send('Your Account Was Deleted')
    } catch (error) {
        res.send('500').send('The server is not responding')
    }
}