# stocksApp

## Task description

Use express.js to create an API endpoint that expects a stock symbol, a date and a currency code as input.

The application will find the price data of that stock at that date and will convert the numbers to supplied currency using the latest exchange rate.

## Solution

Created API endpoint:
http://localhost:3000/api/v1/stock?stockSymbol=STOCK_SYMBOL&date=DATE&currencyCode=CURRENCY_CODE&outputsize=full

- STOCK_SYMBOL - stock symbol (Examples: IBM, BA, SAIC11B.SAO, TSCO.LON)

- DATE - date (Examples: 2022-09-30)

  **NOTE: Date has to be work day, stock market is not working un the weekend**

- CURRENCY_CODE - currency code (Examples: EUR, CAD, RUB)

- OUTPUTSIZE (optional) - default value is "compact". "compact" returns only the latest 100 data points; If "outputsize=full " is added to the URL, "full" returns the full-length time series of 20+ years of historical data (loads longer).

Example URL without outputsize: http://localhost:3000/api/v1/stock?stockSymbol=IBM&date=2022-09-30&currencyCode=EUR

Example URL with outputsize=full:
http://localhost:3000/api/v1/stock?stockSymbol=IBM&date=2014-09-30&currencyCode=EUR&outputsize=full

_Note: To get current currency rate, it was possible only with paid tier. So the closest I could use was "Previous close (https://polygon.io/docs/forex/get_v2_aggs_ticker__forexticker__prev)" - the close price for the symbol in the given time period_

Used npm packages: Exporess, Axios, dotenv, nodemon
