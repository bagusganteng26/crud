const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./ruote/product.route.js");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send("Node server API ");
});
app.use("/api/products", productRoute);

mongoose.connect("mongodb+srv://sonexb26:bagus26@ukm.nvughp0.mongodb.net/?retryWrites=true&w=majority&appName=ukm")
  .then(() => {
    console.log("Terhubung ke MongoDB");
  })
  .catch(err => console.error('Kesalahan koneksi ke MongoDB:', err)); 
