//? Importing dotenv, and applying it (giving us access to process.env)
require('dotenv').config();

//does this project have seed data we need to import?

//? Importing Express
const express = require("express");

//? Importing Cors
const cors = require("cors");

//? Importing Mongoose
const mongoose = require("mongoose");

// //? Connection string URL variable from .env file
// const MONGODB = process.env.MONGO_DB_URL + process.env.DB_NAME;

//? Assign Express
const app = express();

//? Import controller/s
// const { messagesController, userController, roomController  } = require("./controllers/index");

//? Import validation middleware
// const validateSession = require("./middleware/validate_session");

//? sTORING THE CONNECTION STATUS
const db = mongoose.connection;

//? Assigning a variable from .env, with fallback port of 7000
//* || - OR/DEFAULT operator
const PORT = process.env.PORT || 7000;
//remember to create .env file

//? Middleware to allow JSON to be accepted by our HTTP server
app.use(express.json());

//? Allow parsing of query strings
app.use(express.urlencoded({ extended: true }));

//? Allow our endpoints to be interacted with via web browser
app.use(cors());

//? Using the controllers
// app.use("/user", userController);
//validate before doing postcontroller
// app.use(validateSession);
// app.use("/message", messageController);
// app.use("/room", roomController);
//can also do app.use("/post", validateSession, postController)

//? Initial spin up of the Express server
app.listen(PORT, () => {
    try {
      console.log("*".repeat(10));
      console.log(`Server is connected: ${PORT}`);
    } catch (err) {
      console.log("Error connecting", err);
    }
  });

  