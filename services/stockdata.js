const config = require("../config");
const axios = require("axios");

const stockData = async (req, res) => {
  // Gets stocks data from https://www.alphavantage.co/
  let stockApiResponse = await axios.get(
    config.stockUrl(req.query.stockSymbol, req.query.date, req.query.outputsize)
  );

  // Gets currency data from https://polygon.io/
  let currencyApiResponse = await axios.get(
    config.currencyUrl(req.query.currencyCode)
  );

  return res.json({
    stock_symbol: stockApiResponse.data["Meta Data"]["2. Symbol"],
    date: req.query.date,
    price_in_USD: Number(
      stockApiResponse.data["Time Series (Daily)"][req.query.date]["1. open"]
    ),
    [`price_in_${req.query.currencyCode}`]:
      Number(
        stockApiResponse.data["Time Series (Daily)"][req.query.date]["1. open"]
      ) * currencyApiResponse.data.results[0]["c"],
  });
};

module.exports = {
  stockData,
};
