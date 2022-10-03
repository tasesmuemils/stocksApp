const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const stockRoute = express.Router();

app.use(`/api/v1`, stockRoute);

const stockData = require("./services/stockdata");
stockRoute.get("/stock", stockData.stockData);

app.listen(process.env.PORT, () => {
  console.log(`Stocks app listening on port ${process.env.PORT}`);
});
