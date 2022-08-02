// const largeNumber = 356;

// module.exports ={
//     largeNumber
// }

//PT3

const getTime = function() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +"in Jerusalem";
    return time;
}
module.exports={
    getTime
}


