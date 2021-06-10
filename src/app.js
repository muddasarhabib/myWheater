const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 7000;
const publicPath=path.join(__dirname,'../public');
const newViewDirectory=path.join(__dirname,'../templates/views');
const PartialPath=path.join(__dirname,'../templates/partials');

// start routing in express js 

app.set('view engine','hbs');
app.set('views',newViewDirectory)
app.use(express.static(publicPath));
hbs.registerPartials(PartialPath);
app.get('/',(req,res)=>{
        res.render('index',{
            title:'Weather Website'
        });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Us'
    });
});

app.get('/weather',(req,res)=>{
    res.render('weather',{
        title:'Search Weather'
    });
});

app.get('*',(req,res)=>{
    res.render('error',{
        title:'404 error page not found'
    });
});
//creating custom server 
app.listen(port,()=>{
    console.log('server successfully created');
})