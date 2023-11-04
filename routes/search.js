const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");
const MAX_TIMES = 5;

router.get("/", async (req, res, next) => {
  var keyword = req.query.keyword || "";
  var results;

  try {
    if (keyword) {
      results = await MySQLClient.executeQuery(
        await sql("SELECT_SHOP_LIST_BY_NAME"),
        [
          `%${keyword}%`,
          MAX_TIMES
        ]
      );
    } else {
      results = await MySQLClient.executeQuery(
        await sql("SELECT_SHOP_HIGH_SCORE_LIST"),
        [MAX_TIMES]
      );
    }

    res.render("./search/list.ejs", { results });
  } catch (err) {
    next(err);
  }
});

module.exports = router;