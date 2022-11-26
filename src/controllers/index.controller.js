import { pool } from "../db.js";

export const getIndex = (req, res) => {
  pool.query("SELECT 1 + 1 AS result", (error, result) => {
    if (error) {
      throw error;
    } else {
      console.log("result");
      console.log(result);
      res.json(result[0]);
    }
  });
};
