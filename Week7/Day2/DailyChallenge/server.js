const express = require('express');
let app = express();

app.use('/',express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/aboutMe/:hobby',(req,res)=>{
    const h = req.params.hobby;
    if(typeof(h) !== 'string'){
        return res.status(201).json({msg:'Invalid entry'});
    }else{
        return res.send(h)
    }
    console.log(res.send(req.params));
})

app.get('/pic',(req,res)=>{
    res.sendFile(__dirname+'/public/tom.png');
})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html',function(err,data){
    res.writeHead(200,{'Content_type':'text/html'});
    res.write(data);
    });
});

app.post('/formData',(req,res)=>{
    const e = req.body.email;
    const t = req.body.msg;
    console.log(e,t);
    

})


app.listen(3001,()=>{
    console.log("litening to port 3001..")
})