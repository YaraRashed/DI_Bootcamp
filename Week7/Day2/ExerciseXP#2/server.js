//EX1


const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.json(  user = {
        firstname: 'John',
        lastname: 'Doe'
    })

})

app.listen(5004,()=>{console.log("Server running on port 5004")});

//EX2
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query)

    res.send(JSON.stringify(req.query));
})

app.listen(5004)

//EX3

const express = require('express');
const app = express();


app.use('/',express.static(__dirname+'/public'));
app.listen(3000,(req,res)=>{
    console.log("port 3000");
})
