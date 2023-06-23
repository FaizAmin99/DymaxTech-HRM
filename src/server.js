const express = require("express");
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

