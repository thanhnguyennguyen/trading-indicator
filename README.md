# trading-indicator
[![npm version](https://badge.fury.io/js/trading-indicator.svg)](https://badge.fury.io/js/trading-indicator)

provide trading technical indicator values based on market data of almost crypto currency exchanges
https://www.npmjs.com/package/trading-indicator



[☕ Give me a coffee  :heart:](https://bscscan.com/address/0x9059f758e2d7ab314407cf6ae821b024e538c792) 


## Installation
Node.js version 10 or later is required
```bash
npm install --save trading-indicator
```

  ## Fetch ticker information
  - Parameter:
    - Exchange name
    - Symbol
    - IsFuture exchange
  ```javascript
  let ticker = await indicators.ticker("binance", symbol, true)
  ```
  The structure of a ticker is as follows:
```javascript
{
    'symbol':        string symbol of the market ('BTC/USD', 'ETH/BTC', ...)
    'info':        { the original non-modified unparsed reply from exchange API },
    'timestamp':     int (64-bit Unix Timestamp in milliseconds since Epoch 1 Jan 1970)
    'datetime':      ISO8601 datetime string with milliseconds
    'high':          float, // highest price
    'low':           float, // lowest price
    'bid':           float, // current best bid (buy) price
    'bidVolume':     float, // current best bid (buy) amount (may be missing or undefined)
    'ask':           float, // current best ask (sell) price
    'askVolume':     float, // current best ask (sell) amount (may be missing or undefined)
    'vwap':          float, // volume weighed average price
    'open':          float, // opening price
    'close':         float, // price of last trade (closing price for current period)
    'last':          float, // same as `close`, duplicated for convenience
    'previousClose': float, // closing price for the previous period
    'change':        float, // absolute change, `last - open`
    'percentage':    float, // relative change, `(change/open) * 100`
    'average':       float, // average price, `(last + open) / 2`
    'baseVolume':    float, // volume of base currency traded for last 24 hours
    'quoteVolume':   float, // volume of quote currency traded for last 24 hours
}
```

## Available Indicators
[ADX](https://github.com/thanhnguyennguyen/trading-indicator#adx-average-directional-index), [ATR](https://github.com/thanhnguyennguyen/trading-indicator#atr-average-true-range), [Bollinger bands](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#bb-bollinger-bands) , [EMA](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#ema-exponential-moving-average), [IchimokuCloud](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#ichimokucloud), [MACD](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#macd-moving-average-convergence-divergence), [MFI](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#mfi), [OBV](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#obv), [RSI](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#rsi), [SMA](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#sma-simple-moving-average), [Stochastic RSI](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#stochastic-rsi), [WMA](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#wma-weighted-moving-average)

## Available Alerts

[Golden cross / Death cross](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#golden-cross--death-cross) , [RSI in overBought/overSold](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#rsi-in-overboughtoversold-area) , [Price crosses SMA/EMA](https://github.com/thanhnguyennguyen/trading-indicator/blob/master/README.md#price-crosses-smaema)

## Supported exchanges
  
  - https://github.com/ccxt/ccxt#certified-cryptocurrency-exchanges
  
  - https://github.com/ccxt/ccxt#supported-cryptocurrency-exchange-markets
  
## Supported interval
  - 1m : 1 minute
  - 5m: 5 minutes
  - 15m: 15 minutes
  - 30m: 30 minutes
  - 45m: 45 minutes
  - 1h : 1 hour
  - 2h : 2 hours
  - 4h : 4 hours
  - 1d : 1 day
  - 1w : 1 week
  - 1M : 1 month


## Sample code

 ### ATR (Average True Range)
  - Parameters:
      - Period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { atr, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
    let atrData = await atr(14, "close", input)
    console.log(atrData[atrData.length - 1])
  ```

 ### ADX (Average Directional Index)
  - Parameters:
      - Period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { adx, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
    let adxData = await adx(14, "close", input)
    console.log(adxData[adxData.length - 1])
  ```



  ### BB (Bollinger bands)

  - Parameters:
      - Bollinger bands period: integer
      - stdDev : integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { bb, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
      let bbData = await bb(50, 2, "close", input)
      console.log(bbData[bbData.length - 2])
  ```
  
 ### EMA (Exponential Moving Average)
   - Parameters:
      - MA period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { ema, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
    let emaData = await ema(8, "close", input)
    console.log(emaData[emaData.length - 1])
  ```
  
  
 ### IchimokuCloud
  - Parameters:
      - conversionPeriod: integer
      - basePeriod: integer
      - spanPeriod: integer
      - displacement: integer
      - Input : detach from OHLCV
  ```javascript
    const { ichimokuCloud, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
    console.log(await ichimokuCloud(9, 26, 52, 26, input))
  ```
    
 ### MACD (Moving Average Convergence Divergence)
  - Parameters:
      - Fast period: integer
      - Slow period: integer
      - Signal period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { macd, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
      console.log(await macd(12, 26, 9, "close", input))
  ```

 ### MFI
  - Parameters:
      - MFI period: integer
      - Input : detach from OHLCV
  ```javascript
    const { mfi, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
     console.log(await mfi(14, input))
   ```

  
 ### OBV
  - Parameters:
      - Input : detach from OHLCV
  ```javascript
    const { obv, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
     console.log(await obv(input))
   ```

  
 ### RSI
  - Parameters:
      - RSI period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { rsi, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
     console.log(await rsi(14, "close", input))
   ```

 ### SMA (Simple Moving Average)
  - Parameters:
      - MA period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { sma, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
    let smaData = await sma(8, "close", input)
    console.log(smaData[smaData.length - 1])
  ```
  
 ### Stochastic RSI
  - Parameters:
      - kPeriod: integer
      - dPeriod: integer
      - rsiPeriod: integer
      - stochasticPeriod: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { stochasticRSI, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
     console.log(await stochasticRSI(3, 3, 14, 14, "close", input))
   ```

 ### WMA (Weighted Moving Average)
  - Parameters:
      - MA period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Input : detach from OHLCV
  ```javascript
    const { wma, getDetachSourceFromOHLCV } = require('trading-indicator')
    const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
    let wmaData = await wma(8, "close", input)
    console.log(wmaData[wmaData.length - 1])
  ```

 ### Golden cross / Death cross
  - Parameter:
      - MA_FAST (should be 50)
      - MA_SLOW (should be 200)
      - Input : detach from OHLCV
      
      Sample code
      ```javascript
        const { goldenCross, deathCross, maCross, getDetachSourceFromOHLCV }  = require('trading-indicator')
        const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market

        await goldenCross(50, 200, input) 
        await deathCross(50, 200, input) 
        
        // check both golden/death cross
        await maCross(50, 200, input) // response  { goldenCross: false, deathCross: false }
      ```

 ### RSI in overBought/overSold area
  - Parameter:
      - RSI Period
      - OverBoughtThreshold (75)
      - OverSoldThreshold (25)
      - Input : detach from OHLCV
      
      Sample code
      ```javascript
        const { rsiCheck, getDetachSourceFromOHLCV } = require('trading-indicator')
        const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
        await rsiCheck(14, 75, 25, input) 
        // Test RSIcheck
        // { overBought: false, overSold: false, rsiVal: 27.81 }
      ```
      
 ### Price crosses SMA/EMA
  - Parameter:
      - MA Period
      - Input : detach from OHLCV
      
      Sample code
      ```javascript
        const { priceCrossSMA, priceCrossEMA, getDetachSourceFromOHLCV }  = require('trading-indicator')
        const { input } = await getDetachSourceFromOHLCV('binance', 'BTC/USDT', '1h', false) // true if you want to get future market
        await priceCrossSMA(14, input) 
        //Test SMA cross
        // { cross: true, direction: 'up' }


        await priceCrossEMA(14, input) 
        // Test EMA cross
        // { cross: true, direction: 'down' }
        

## Dependencies
- [![ccxt](https://camo.githubusercontent.com/509b94aa541a5c3b461d1a84469f4b3d4112af57/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434358542d6365727469666965642d677265656e2e7376673f73616e6974697a653d74727565)](https://github.com/ccxt/ccxt)
- [technicalindicators](https://github.com/anandanand84/technicalindicators)

