
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullName : {
        type : String,
        trim : true,
        require : true
    },
    email : {
        type : String,
        trim : true,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    creationDate : {
        type : Date,
        default : Date.now
    }
})   

module.exports = mongoose.model('_userSchema',userSchema)