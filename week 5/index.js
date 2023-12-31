const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({path:"./.env" })
const app = express();
const post = 5000;

const db =mysql.createConnection({
    host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.info  
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.set('view engine','hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


db.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("MySql is Connected...")
    }
});

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(post,()=>{
    console.log(`Server started on port ${post}`)
});