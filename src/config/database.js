const mongoose = require("mongoose");
require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log("Database is connected"))
  .catch((error) => console.error(error));
