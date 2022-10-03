const dotenv = require("dotenv");
dotenv.config();

// API URLs for stock and currency data
const stockUrl = (stockSymbol, date, outputsize) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&date=${date}&outputsize=${
    outputsize ? outputsize : `compact`
  }&apikey=${process.env.STOCKS_KEY}`;

const currencyUrl = (currencyCode) =>
  `https://api.polygon.io/v2/aggs/ticker/C:USD${currencyCode}/prev?adjusted=true&apiKey=${process.env.CURRENCY_KEY}`;

module.exports = {
  stockUrl,
  currencyUrl,
};
