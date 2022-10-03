const config = require("../config");
const axios = require("axios");

const axiosOptions = {};

const stockData = async (req, res) => {
  let stockApiResponse = await axios.get(
    config.stockUrl(req.query.stockSymbol, req.query.date)
  );

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
