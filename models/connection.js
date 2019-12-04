const mongoose = require("mongoose");

let url = "mongodb://localhost:27017/SimpleRegister";

const connection = mongoose.connect(url, {useCreateIndex:true, 
useFindAndModify:true, useUnifiedTopology:true}, (err) => {
    if(err){
        return err;
    }
});


if(connection){
    console.log("Database connection successful!")
}

module.exports = connection;