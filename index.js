const bb = require('./indicators/bollinger_band.js')
const ema = require('./indicators/ema.js')
const macd = require('./indicators/macd.js')
const mfi = require('./indicators/mfi.js')
const obv = require('./indicators/obv.js')
const rsi = require('./indicators/rsi.js')
const sma = require('./indicators/sma.js')
const stochasticRSI = require('./indicators/stochasticrsi.js')
const ticker = require('./indicators/ticker.js')
const wma = require('./indicators/wma.js')
module.exports = {
    bb: bb,
    ema: ema,
    macd: macd,
    mfi: mfi,
    obv: obv,
    rsi: rsi,
    sma: sma,
    stochasticRSI: stochasticRSI,
    ticker: ticker,
    wma: wma,
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

//    console.log("Stochastic RSI example")
//    console.log(await stochasticrsi(3,3,14,14,'close', 'binance', 'BTC/USDT', '1h', false))
// 
// main()