const mongoose=require('mongoose');

// connect server with database
mongoose.connect('mongodb://localhost:27017/library');
// structure of ducument Schema
const Schema=mongoose.Schema;
const BookSchema=new Schema({

    // single book means single document
    title:String,
    author:String,
    genre:String,
    image:String
});
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;