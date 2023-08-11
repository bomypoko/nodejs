const Products = require('../Models/Product')

exports.list = async(req , res) => {
    try {
        const productlist = await Products.find({}).exec();
        res.send(productlist)
    } catch (error) {
        res.send('The server is no responding').send(500)
    }
}


exports.read = async(req,res) => {
    // อันนี้ต้องหา id ด้วย จะเป็นข้อมูลที่มาจาก URL
    try {
        const id = req.params.id
        const productfind = await Products.findOne({_id: id}).exec();
        res.send(productfind)
       
        
    } catch (error) {
        res.status(500).send('server is error')
        
    }
}
exports.update = async(req ,res) => {
    
    try {
        const id = req.params.id
        const productupdate = await Products.
            findOneAndUpdate({ _id: id },req.body, { new: true}).exec()
            res.send(productupdate)
    } catch (error) {
        
    }
}

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

    const id = req.params.id
    const productdelete = await Products.findOneAndDelete({ _id: id}).exec()
    res.send(productdelete)
 
}