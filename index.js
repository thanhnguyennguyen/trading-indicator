const rsi = require('./indicators/rsi.js')
const sma = require('./indicators/sma.js')
const bb = require('./indicators/bollinger_band.js')
module.exports = {
    rsi: rsi,
    sma: sma,
    bb: bb,
}
const main = async () => {
    console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))
    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(smaData[smaData.length - 1])
    let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
    console.log(bbData[bbData.length - 1])
}
main()
