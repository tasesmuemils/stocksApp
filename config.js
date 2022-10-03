const dotenv = require("dotenv");
dotenv.config();

const stockUrl = (stockSymbol, date) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&date=${date}&apikey=${process.env.STOCKS_KEY}`;

const currencyUrl = (currencyCode) =>
  `https://api.polygon.io/v2/aggs/ticker/C:USD${currencyCode}/prev?adjusted=true&apiKey=${process.env.CURRENCY_KEY}`;

module.exports = {
  stockUrl,
  currencyUrl,
};
