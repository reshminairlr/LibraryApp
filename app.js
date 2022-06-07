const express=require('express');
const nav=[
    {link:'./books',name:'Books'},
    {link:'./authors',name:'Authors'},
    {link:'./signup',name:'SignUp'},

    {link:'/admin',name:'Add Book'}];

const booksRouter=require('./src/routes/bookRouters')(nav);
const authorsRouter=require('./src/routes/authorsRouters')(nav);
const signUpRouter=require('./src/routes/signUpRouters')(nav);
const adminRouter=require('./src/routes/adminRoute')(nav);



const app=new express();

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signUpRouter);
app.use('/admin',adminRouter);


// const express = require('express');
// const app = express();

// app.use(express.json());

 app.use(express.urlencoded({extended:true})); //post methode middleware



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
// res.send("welcome Page");
    res.render("index",
    {
        nav,title:'Library'
    });

})

app.listen(3200);