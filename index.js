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
  ...require('./indicators/adx.js'),

  ...require('./candlestick-pattern/doji.js'),
  ...require('./candlestick-pattern/abandoned-baby.js'),
  ...require('./candlestick-pattern/bearish-engulfing.js'),
  ...require('./candlestick-pattern/bullish-engulfing.js'),
  ...require('./candlestick-pattern/dark-cloud-cover.js'),
  ...require('./candlestick-pattern/downside-tasuki-gap.js'),
  ...require('./candlestick-pattern/dragon-fly-doji.js'),
  ...require('./candlestick-pattern/grave-stone-doji.js'),
  ...require('./candlestick-pattern/bullish-harami.js'),
  ...require('./candlestick-pattern/bearish-harami.js'),
  ...require('./candlestick-pattern/bullish-harami-cross.js'),
  ...require('./candlestick-pattern/bearish-harami-cross.js'),
  ...require('./candlestick-pattern/bullish-marubozu.js'),
  ...require('./candlestick-pattern/bearish-marubozu.js'),
  ...require('./candlestick-pattern/evening-doji-star.js'),
  ...require('./candlestick-pattern/evening-star.js'),
}

// console.log(module);
// examples for testing
const main = async () => {
  try {
    console.log('RSI 14 on Binance BTC/USDT 15m')
    console.log(await module.exports.rsi(14, 'close', 'binance', 'BTC/USDT', '15m', true))

    console.log('SMA 8 on Binance BTC/USDT 15m')
    let smaData = await module.exports.sma(8, 'close', 'binance', 'BTC/USDT', '15m', true)
    console.log(smaData[smaData.length - 1])

    console.log('Bollinger bands 50, 2 on Binance BTC/USDT 15m')
    let bbData = await module.exports.bb(50, 2, 'close', 'binance', 'BTC/USDT', '15m', true)
    console.log(bbData[bbData.length - 2])

    console.log('MACD 12 26 9 on Binance BTC/USDT 15m')
    let macdData = await module.exports.macd(12, 26, 9, 'close', 'binance', 'BTC/USDT', '15m', true)
    console.log(macdData[macdData.length - 2])

    console.log('Stochastic RSI example')
    console.log(await module.exports.stochasticrsi(3, 3, 14, 14, 'close', 'binance', 'BTC/USDT', '1h', false))

    console.log('IchimokuCloud  example')
    console.log(await module.exports.ichimokuCloud(9, 26, 52, 26, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test golden cross')
    console.log(await module.exports.goldenCross(50, 200, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test MA cross')
    console.log(await module.exports.maCross(50, 200, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test RSIcheck')
    console.log(await module.exports.rsiCheck(14, 75, 25, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test SMA cross')
    console.log(await module.exports.priceCrossSMA(14, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test EMA cross')
    console.log(await module.exports.priceCrossEMA(14, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test break out BB')
    console.log(await module.exports.bbCheck(50, 2, 'binance', 'BTC/USDT', '1h', false))

    console.log('Test isDoji')
    console.log(await module.exports.isDojiPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test abandonedBaby')
    console.log(await module.exports.isAbandonedBabyPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBearishEngulfingPattern')
    console.log(await module.exports.isBearishEngulfingPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBullishEngulfingPattern')
    console.log(await module.exports.isBullishEngulfingPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isDarkCloudCoverPattern')
    console.log(await module.exports.isDarkCloudCoverPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isDownsideTasukiGapPattern')
    console.log(await module.exports.isDownsideTasukiGapPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isDragonFlyDojiPattern')
    console.log(await module.exports.isDragonFlyDojiPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isGraveStoneDojiPattern')
    console.log(await module.exports.isGraveStoneDojiPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBullishHaramiPattern')
    console.log(await module.exports.isBullishHaramiPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBearishHaramiPattern')
    console.log(await module.exports.isBearishHaramiPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBullishHaramiCrossPattern')
    console.log(await module.exports.isBullishHaramiCrossPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBearishHaramiCrossPattern')
    console.log(await module.exports.isBearishHaramiCrossPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBullishMarubozuPattern')
    console.log(await module.exports.isBullishMarubozuPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isBearishMarubozuPattern')
    console.log(await module.exports.isBearishMarubozuPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isEveningDojiStarPattern')
    console.log(await module.exports.isEveningDojiStarPattern('binance', 'BTC/USDT', '1h', false))

    console.log('Test isEveningStarPattern')
    console.log(await module.exports.isEveningStarPattern('binance', 'BTC/USDT', '1h', false))
  } catch (err) {
    console.log(err)
  }
}
// main()
