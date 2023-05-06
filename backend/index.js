const express = require('express');
const port = 8000;
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();


// app.use(express.json());
app.use(cors());

const urlencodedParser=(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies


//db
const db = require("./models");
db.sequelize.sync({ alter: true});

//routes
const { authRoutes } = require('./routes');


//middleware
app.use("/auth", authRoutes)

app.listen(port, function(){
    console.log(`server is running ${port}`);
})