const mongoose = require ("mongoose");


const schema = mongoose.Schema;

const studentModel = new schema({

    name:String,
    studentID: {
        required: true,
        type:String
    },
    school:String,
    gender:String,
    class:String


});


module.exports = mongoose.model("studentCollection", studentModel);
