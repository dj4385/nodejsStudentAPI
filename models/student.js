const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : {
        type: String,
        trim: true,
        // require : true
    },
    emial : {
        type: String,
        trim: true,
        // require : true
    },
    contactNo : {
        type: String,
        trim: true,
        // require : true
    },
    address : {
        type: String,
        trim: true,
        // require : true
    },
    course : {
        type: String,
        trim: true,
        // require : true
    },
    courseDuration : {
        type: Number,
        trim: true,
        // require : true
    }
})

module.exports = mongoose.model('studentSchema',studentSchema)