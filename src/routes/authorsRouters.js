const express=require('express');
const authorsRouter=express.Router();

function router(nav){
    var authors=[
        {   name:'Joseph Barbera ',
            book1:'Tom & Jerry',
            book2:'My Life in Toons:From Flatbush to Bedrock in Under a Century ',
            book3:'Yogi Bear UK Annual 1980',
            book4:'Scooby-Doo Where Are You!: The Complete Series',
            book5:'Hucky, Yogi und die Feuersteins',
            img:"tom.jpg"
    },
        {      
            name:'JK Rowling',
            book1:'Harry Potter',
            book2:'Fantastic Beasts and Where to Find Them ',
            book3:'Troubled Blood',
            book4:'The Ickabog',
            book5:'The Casual Vacancy',
            img:"harry.jpg"
        },
        {  
            name:'Basheer',
            book1:'Pathummayude Aadu',
            book2:'Balyakalasakhi  ',
            book3:'Basheer Sampoorna Kruthikal',
            book4:'Anuragathinte Dinangal',
            book5:'Premalekhanam',
            img:"basheer.jpg"

           
    },
    {  
       
        name:'Chethan Bhagath',
        book1:'Chetan Bhagat is the author of blockbuster novels',
        book2:'Two States',
        book3:'India Positive',
        book4:'One Indian Girl',
        book5:'Making India Awesome',
        img:"twostates.jpg"
},


    
    ]
    
    authorsRouter.get('/',function(req,res){
      
        res.render("authors",
        {
            nav,title:'Library',authors
        });
    
    })
    
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",
        {
        nav,title:'Library',
        author:authors[id]
        })
    })
    
    return authorsRouter;
}
module.exports=router;