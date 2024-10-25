const express = require("express");
// require("dotenv").config();

const app = express();
// const bodyParser = require("body-parser");
// const sessionMiddleware = require("./modules/session-middleware");


// Routes includes

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// Routes



// App Set //
const PORT = process.env.PORT || 5000;

// Listen on PORT //
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
