const express = require("express");
const mongoose = require("mongoose");
const  bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost/Project')
const app = express();
const saltRounds = 10;
bcrypt = require('bcrypt')
app.listen(8000);
console.log("servers");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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
        validate:/^[a-z0-9.+&_%]+\@[a-z]+\.[a-z]{2,}$/,
        required : true,

    },
    Phone:{
      type:String,
       validate:/\d{10}$/,
        required:true,

    }

})

 User =  mongoose.model("User",userSchema);



app.post('/api/user',(req,res) => {

    bcrypt.hash(req.body.password,saltRounds , function(err, hash) {

        console.log(hash);
        console.log(req.body.password);
        req.body.password = hash;
        const item1 = new User({
            user:req.body.user,
            password:hash,
            email:req.body.email,
            Phone:req.body.phone
        });
        console.log(item1)
        item1.save().then(items => res.send(items.toString()))

    });


});



app.get('/api/user',function(req,res) {

    User.find().then(items=>res.send(items.toString()))
   });

app.post('/api/user/auth',function(req,resp) {

    console.log(req.body.password);

    User.findOne({'email':req.body.email}, function (err, data) {
        if (err) throw err;
        if(data == null)
        {
            console.log("Email not registered,Please signup first");
            resp.send("0");
            resp.end();

        }
        else{
            bcrypt.compare(req.body.password, data.password, function(err, res) {
                if (res) {
                    console.log(resp);

                    resp.send("1");
                } else {

                    resp.send("0");

                }
            });

        }
        });
    })
