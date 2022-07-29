//console.log('as')

//const something = reqiure(''somelybrabry);

const express = require('express');
const app = express();
const mongoose = require('mongoose'); 

require('dotenv').config();
//produsing code
async function main(){
    //every function return something
    return await mongoose.connect('mongodb+srv://anjali622:rathor622@cluster0.bmcybml.mongodb.net/?retryWrites=true&w=majority');
}

main().then((d)=>{
    console.log('connected')
}).catch(err => console.log(err));

let port = process.env.PORT 

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});