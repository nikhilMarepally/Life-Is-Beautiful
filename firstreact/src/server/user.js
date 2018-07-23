const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({

    user : {
        type : String,
        required : true,
        index: {unique: true}
    },
    password :{
        type: String,
        required : true
    },
    email:{
        type:String,
        validate:/^[a-z0-9.+&_%]+\@[a-z]+.[a-z]{2,}$/,
        required : true,

    },
    Phone:{
      type:String,
       validate:/\d{10}$/,
        required:true,

    }

})


module.exports = User =  mongoose.model("User",userSchema);
