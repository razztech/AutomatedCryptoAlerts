# Automated Crypto Alerts
Official Twitter for the project @AutomatedAlerts: https://twitter.com/AutomatedAlerts </br>
A Node.js bot that tweets in real time about price fluctuations for the top cryptocurrencies: `BTC`, `ETH`, `BNB`, `XRP`, `ADA`, `SOL`, `DODGE`. </br>
Implemented using the CoinMarketCap API (https://coinmarketcap.com/api/) and the Twitter API (https://developer.twitter.com/en/docs/twitter-api). </br>
The app is deployed to Heroku. To run the app locally, follow these steps: </br>
- Create a developer account for CoinmarketCap API and Twitter API (see links above)
- Set up a `.env` file with the needed KEYS:
  - ACCESS_SECRET
  - ACCESS_TOKEN
  - APP_KEY
  - APP_SECRET
  - X_CMC_PRO_API_KEY
- Remove comments for `require('dotenv/config')`
- Run `node index.js` in Terminal

