const axios = require('axios');
const cron = require('node-cron')
const { TwitterApi } = require('twitter-api-v2')
const client = require("./twitterClient.js")
// require('dotenv/config')

const cryptoFluctuations = () => {
  cron.schedule('*/30 * * * *', function() {
    getCoinsInformation()
      .then((response) => {
        coins = response.data.data
        for(i = 0; i<10; i++) {
          coin = coins[i]
          priceChange = coin.quote.USD.percent_change_1h.toFixed(2)
          coinName = coin.name
          coinSymbol = coin.symbol
          if (Math.abs(priceChange) > 0) {
            if (priceChange < 0) {
              message = "🚨" + coinName + " (" + coinSymbol + ") " + "is down 📉 " + priceChange + "% in the past hour."
              tweet(message)
            } else {
              message = "🚨" + coinName + " (" + coinSymbol + ") " + "is up 📈 " + priceChange + "% in the past hour."
              tweet(message)
            }
          }
        }
      })
  }); 
}

const tweet = async (message) => {
  try {
    await client.v2.tweet(message)
  } catch (e) {
    console.log(e)
  }
}

const getCoinsInformation = () => {
  response = axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY,
      },
  })
  return Promise.resolve(response)
}

cryptoFluctuations()

