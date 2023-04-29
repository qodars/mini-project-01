const express = require('express');
const port = 8000;
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors())

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