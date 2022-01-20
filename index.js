
module.exports = {
    ...require('./indicators/bollinger_band.js'),
    ...require('./indicators/ema.js'),
    ...require('./indicators/ichimoku.js'),
    ...require('./indicators/macd.js'),
    ...require('./indicators/mfi.js'),
    ...require('./indicators/obv.js'),
    ...require('./indicators/rsi.js'),
    ...require('./indicators/sma.js'),
    ...require('./indicators/stochasticrsi.js'),
    ...require('./indicators/ticker.js'),
    ...require('./indicators/wma.js'),
    ...require('./alerts/index.js'),
    ...require('./indicators/atr.js'),
}

// examples for testing
const main = async () => {
    try {
        console.log("RSI 14 on Binance BTC/USDT 15m")
        console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))

        console.log("SMA 8 on Binance BTC/USDT 15m")
        let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
        console.log(smaData[smaData.length - 1])

        console.log("Bollinger bands 50, 2 on Binance BTC/USDT 15m")
        let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
        console.log(bbData[bbData.length - 2])

        console.log("MACD 12 26 9 on Binance BTC/USDT 15m")
        let macdData = await macd(12, 26, 9, "close", "binance", "BTC/USDT", "15m", true)
        console.log(macdData[macdData.length - 2])

        console.log("Stochastic RSI example")
        console.log(await stochasticRSI(3, 3, 14, 14, 'close', 'binance', 'BTC/USDT', '1h', false))


        console.log("IchimokuCloud  example")
        console.log(await ichimokuCloud(9, 26, 52, 26, 'binance', 'BTC/USDT', '1h', false))

        console.log("Test golden cross")
        console.log(await alerts.goldenCross(50, 200, 'binance', 'BTC/USDT', '1h', false))

	console.log("Test MA cross")
        console.log(await alerts.maCross(50, 200, 'binance', 'BTC/USDT', '1h', false))

	console.log("Test RSIcheck")
        console.log(await alerts.rsiCheck(14, 75, 25, 'binance', 'BTC/USDT', '1h', false))

	console.log("Test SMA cross")
	console.log(await alerts.priceCrossSMA(14, 'binance', 'BTC/USDT', '1h', false))

        console.log("Test EMA cross")
        console.log(await alerts.priceCrossEMA(14, 'binance', 'BTC/USDT', '1h', false))

        console.log("Test break out BB")
        console.log(await alerts.bbCheck(50, 2, 'binance', 'BTC/USDT', '1h', false))

    } catch (err) {
        console.log(err)
    }

}
//main()
