const express = require("express");
// require("dotenv").config();

const app = express();
// const bodyParser = require("body-parser");
// const sessionMiddleware = require("./modules/session-middleware");

// Include routes
const boardRouter = require("./routes/board.router");

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Configure routes
app.use("/api/board", boardRouter);

// Configure server port
const PORT = process.env.PORT || 5000;

// Listen on PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
