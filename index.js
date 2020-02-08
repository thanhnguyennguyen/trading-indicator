const rsi = require('./indicators/rsi.js')
const ema = require('./indicators/ema.js')
const sma = require('./indicators/sma.js')
const bb = require('./indicators/bollinger_band.js')
const macd = require('./indicators/macd.js')
const ticker = require('./indicators/ticker.js')
module.exports = {
    rsi: rsi,
    ema: ema,
    sma: sma,
    bb: bb,
    macd: macd,
    ticker: ticker,
}
// const main = async () => {
//    console.log("RSI 14 on Binance BTC/USDT 15m")
//    console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))
// 
//    console.log("SMA 8 on Binance BTC/USDT 15m")
//    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
//    console.log(smaData[smaData.length - 1])
// 
//    console.log("Bollinger bands 50, 2 on Binance BTC/USDT 15m")
//    let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
//    console.log(bbData[bbData.length - 2])
// 
//    console.log("MACD 12 26 9 on Binance BTC/USDT 15m")
//    let macdData = await macd(12, 26, 9, "close", "binance", "BTC/USDT", "15m", true)
//    console.log(macdData[macdData.length - 2])
// 
// main()
