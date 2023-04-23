const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.get('/hello', (req,res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("Server running on port http://127.0.0.1:3000")
})