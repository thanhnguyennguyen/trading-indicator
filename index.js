const rsi = require('./indicators/rsi.js')
const sma = require('./indicators/sma.js')
module.exports = {
    rsi: rsi,
    sma: sma,
}
const main = async () => {
    console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))
    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(smaData[smaData.length - 1])
}
main()