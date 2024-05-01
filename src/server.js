require('dotenv').config();
const { config } = require('dotenv');
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database')
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

//body.req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config tempalte engine
configViewEngine(app);
//khai bao route
app.use('/',webRoutes);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})