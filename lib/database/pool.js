const { promisify } = require("util");
const config = require("../../config/mysql.config.js");
const mysql = require("mysql");
const pool = mysql.createPool({
  host: config.HOST,
  port: config.PORT,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DATABASE,
  connectionLimit: config.CONNECTION_LIMIT,
  queueLimit: config.QUEUR_LIMIT
});

module.exports = {
  pool,
  getCoonection: promisify(pool.getConnection).bind(pool),
  executeQuery: promisify(pool.query).bind(pool),
  releaseConnerction: function (connection) {
    connection.release();
  },
  end: promisify(pool.end).bind(pool)
};