const express = require('express');
const cors = require('cors');
const app =express();
const dotenv = require("dotenv");
const {connect} = require('./utils/db.utils');

dotenv.config({path: './config.env'});

const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, async () => {
    console.log(`server is running at port ${PORT}`)
    await connect();
})