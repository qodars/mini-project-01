const express = require('express');
const port = 8000;

const app = express();
app.use(express.json());

//db
const db = require("./models");
db.sequelize.sync({ alter: true});

app.listen(port, function(){
    console.log(`server is running ${port}`);
})