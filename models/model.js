

const mongoose = require('mongoose')


const empc = mongoose.model('empCRUD',

    {
        _id: String,
        uname: String,
        email: String,
        city: String
    }
)
module.exports = empc