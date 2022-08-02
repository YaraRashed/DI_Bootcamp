
//PT1

// const b = 5;
const a = require("./main.js");
// const c = a.largeNumber + b;
// console.log(c);


//PT2

// const http = require('http');
// const server= http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<p>My Module is ${c} </p> <h1>Hi there at the frontend</h1>`)


// })

// server.listen(3000, ()=>{
//     console.log("I'm listening...");
// });


//PT3

a.getTime;


const http = require('http');
const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>The date and time are currently: ${a.getTime()}  </p>`);
})

server.listen(8080, ()=>{
    console.log("I'm listening...");
});
