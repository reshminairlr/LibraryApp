const express=require('express');

const booksRouter=express.Router();
function router(nav){
    var books=[
        {   title:'Tom & Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom.jpg"
    },
        {      
            title:'Harry Porter',
            author:'JK Rowling',
            genre:'Fatesy',
            img:"harry.jpg"
        },
        {  
            title:'Pattumede Adu',
            author:'Basheer',
            genre:'Drama',
            img:"basheer.jpg"
    },
    {  
        title:'Two States',
        author:'Chethan Bhagath',
        genre:'Novel',
        img:"twostates.jpg"
},
{  
    title:' Wings Of Fire',
    author:'APJ Abdul Kalam',
    genre:'Novel',
    img:"Wingsoffire.jpg"
},

    
    ]
    
    booksRouter.get('/',function(req,res){
      
        res.render("books",
        {
            nav,title:'Library',books
        });
    
    })
    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",
        {
        nav,title:'Library',
        book:books[id]
        })
    })
    
    return booksRouter;
}
module.exports=router;