
const mongoose = require('mongoose'),
      bcrypt = require('bcrypt')

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

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('_userSchema',userSchema)