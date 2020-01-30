const rsi = require('./indicators/rsi.js')
module.exports = {
    rsi: rsi,
}
const main = async () => {
    console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))
}
main()