const app = require("./src/app.js");
require("dotenv").config();
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  APP_PORT,
} = require("./src/config/envConfs.js");
const pool = require("./src/pool");

pool
  .connect({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  })
  .then(() => {
    app().listen(APP_PORT, () => {
      console.log(`Listening on port ${APP_PORT}`);
    });
  })
  .catch((err) => console.error(err));
