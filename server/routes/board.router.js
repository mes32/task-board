const express = require("express");
// const pool = require("../modules/pool");
const router = express.Router();

// Route GET /api/board
// Returns a list of all task boards
router.get("/", (req, res) => {
  // const queryText = `
  //   SELECT
  //     name
  //   FROM board;
  //   `;
  // pool
  //   .query(queryText, [id])
  //   .then((queryResponse) => {
  //     res.send(queryResponse.rows);
  //   })
  //   .catch((queryError) => {
  //     const errorMessage = `SQL error using GET /api/board, ${queryError}`;
  //     console.log(errorMessage);
  //     res.sendStatus(500);
  //   });

  res.send([{ boom: "BOOM" }]);
});

module.exports = router;
