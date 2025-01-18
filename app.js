const express = require('express');
const app = express();
const dontenv = require('dotenv').config();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",function (){
    console.log("conncted to database")
});

app.use("/",require("./routes/posts"))

app.listen(port, () => {
    console.log(`App is listening at https://localhost:${port}`);
});