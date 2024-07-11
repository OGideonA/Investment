const express= require("express");
const mongoose= require('mongoose');
const fs= require('fs');
const path = require('path');
const PORT= 3000;

const app= express();
app.use(express.json());
app.use(url.urlencoded({extended:true}));