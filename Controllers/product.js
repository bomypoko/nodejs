exports.read = async(req,res) =>{
    res.send('hello controller read')
}

exports.list = async(req,res) => {
    try {

        res.send('Hello list')

    }catch(err) {
        console.log(err)
        res.status(500).send('Server Down')
    }
}
exports.create = async(req,res) => {
    try {

        res.send('Hello Create')

    }catch(err) {
        console.log(err)
        res.status(500).send('Server Down')
    }
}

exports.update = async(req,res) => {
    try {

        res.send('Hello update')

    }catch(err) {
        console.log(err)
        res.status(500).send('Server Down')
    }
}

exports.remove = async(req,res) => {
    try {

        res.send('Hello Delete')

    }catch(err) {
        console.log(err)
        res.status(500).send('Server Down')
    }
}