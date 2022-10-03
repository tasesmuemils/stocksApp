const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const stockRoute = express.Router();

app.use(`/api/v1`, stockRoute);

stockRoute.get("/ping", (req, res) => {
  res.json({ status: "Darbojas" });
});

const stockData = require("./services/stockdata");
stockRoute.get("/stock", stockData.stockData);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
