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

  ...require('./candlestick-pattern/input.js'),
  ...require('./candlestick-pattern/doji.js'),
  ...require('./candlestick-pattern/abandoned-baby.js'),
  ...require('./candlestick-pattern/engulfing.js'),
  ...require('./candlestick-pattern/dark-cloud-cover.js'),
  ...require('./candlestick-pattern/downside-tasuki-gap.js'),
  ...require('./candlestick-pattern/harami.js'),
  ...require('./candlestick-pattern/marubozu.js'),
  ...require('./candlestick-pattern/evening-star.js'),
  ...require('./candlestick-pattern/piercing-line.js'),
  ...require('./candlestick-pattern/spinning-top.js'),
  ...require('./candlestick-pattern/morning-star.js'),
  ...require('./candlestick-pattern/three-black-crows.js'),
  ...require('./candlestick-pattern/three-white-soldiers.js'),
  ...require('./candlestick-pattern/hammer.js'),
  ...require('./candlestick-pattern/hanging-man.js'),
  ...require('./candlestick-pattern/shooting-star.js'),
  ...require('./candlestick-pattern/tweezer.js'),
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

    const { input } = await module.exports.getCandleStickInput('binance', 'BTC/USDT', '1h', false)

    console.log('Test isDoji')
    console.log(await module.exports.isDojiPattern(input))

    console.log('Test abandonedBaby')
    console.log(await module.exports.isAbandonedBabyPattern(input))

    console.log('Test isBearishEngulfingPattern')
    console.log(await module.exports.isBearishEngulfingPattern(input))

    console.log('Test isBullishEngulfingPattern')
    console.log(await module.exports.isBullishEngulfingPattern(input))

    console.log('Test isDarkCloudCoverPattern')
    console.log(await module.exports.isDarkCloudCoverPattern(input))

    console.log('Test isDownsideTasukiGapPattern')
    console.log(await module.exports.isDownsideTasukiGapPattern(input))

    console.log('Test isDragonFlyDojiPattern')
    console.log(await module.exports.isDragonFlyDojiPattern(input))

    console.log('Test isGraveStoneDojiPattern')
    console.log(await module.exports.isGraveStoneDojiPattern(input))

    console.log('Test isBullishHaramiPattern')
    console.log(await module.exports.isBullishHaramiPattern(input))

    console.log('Test isBearishHaramiPattern')
    console.log(await module.exports.isBearishHaramiPattern(input))

    console.log('Test isBullishHaramiCrossPattern')
    console.log(await module.exports.isBullishHaramiCrossPattern(input))

    console.log('Test isBearishHaramiCrossPattern')
    console.log(await module.exports.isBearishHaramiCrossPattern(input))

    console.log('Test isBullishMarubozuPattern')
    console.log(await module.exports.isBullishMarubozuPattern(input))

    console.log('Test isBearishMarubozuPattern')
    console.log(await module.exports.isBearishMarubozuPattern(input))

    console.log('Test isEveningDojiStarPattern')
    console.log(await module.exports.isEveningDojiStarPattern(input))

    console.log('Test isEveningStarPattern')
    console.log(await module.exports.isEveningStarPattern(input))

    console.log('Test isPiercingLinePattern')
    console.log(await module.exports.isPiercingLinePattern(input))

    console.log('Test isBullishSpinningTopPattern')
    console.log(await module.exports.isBullishSpinningTopPattern(input))

    console.log('Test isBearishSpinningTopPattern')
    console.log(await module.exports.isBearishSpinningTopPattern(input))

    console.log('Test isMorningStarPattern')
    console.log(await module.exports.isMorningStarPattern(input))

    console.log('Test isMorningDojiStarPattern')
    console.log(await module.exports.isMorningDojiStarPattern(input))

    console.log('Test isThreeBlackCrowsPattern')
    console.log(await module.exports.isThreeBlackCrowsPattern(input))

    console.log('Test isThreeWhiteSoldiersPattern')
    console.log(await module.exports.isThreeWhiteSoldiersPattern(input))

    console.log('Test isHammerPattern')
    console.log(await module.exports.isHammerPattern(input))

    console.log('Test isBullishHammerPattern')
    console.log(await module.exports.isBullishHammerPattern(input))

    console.log('Test isBullishInvertedHammerPattern')
    console.log(await module.exports.isBullishInvertedHammerPattern(input))

    console.log('Test isBearishHammerPattern')
    console.log(await module.exports.isBearishHammerPattern(input))

    console.log('Test isBearishInvertedHammerPattern')
    console.log(await module.exports.isBearishInvertedHammerPattern(input))

    console.log('Test isShootingStarPattern')
    console.log(await module.exports.isShootingStarPattern(input))

    console.log('Test isHangingManPattern')
    console.log(await module.exports.isHangingManPattern(input))

    console.log('Test isTweezerTopPattern')
    console.log(await module.exports.isTweezerTopPattern(input))

    console.log('Test isTweezerBottomPattern')
    console.log(await module.exports.isTweezerBottomPattern(input))
  } catch (err) {
    console.log(err)
  }
}
main()
