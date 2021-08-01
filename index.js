const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeDBConnection } = require("./Database/Db.js");
const CategoryRoutes = require("./routes/category.routes");
const Category = require("./models/category.models");
const errorHandler = require("./middleware/error-handler");
const dotenv = require("dotenv").config();

console.log(dotenv.parsed);
initializeDBConnection();

app.use(cors());
app.use(bodyParser.json());

app.use(CategoryRoutes)
app.use(errorHandler);

app.get("/", (req, res) => {
    res.json("Quiz API is running");
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server started on PORT 5000"))