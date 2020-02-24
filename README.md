# trading-indicator

provide trading technical indicator values based on market data of almost crypto currency exchanges
https://www.npmjs.com/package/trading-indicator

## Installation
Node.js version 10 or later is required
```bash
npm install --save trading-indicator
```

## Available Indicators
  - BB (Bollinger bands)
    - Parameters:
      - Bollinger bands period: integer
      - stdDev : integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```javascript
      const bb = require('trading-indicator').bb
      let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
      console.log(bbData[bbData.length - 2])
  ```
  
  - EMA (Exponential Moving Average)
    - Parameters:
      - MA period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```javascript
    const ema = require('trading-indicator').ema
    let emaData = await ema(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(emaData[emaData.length - 1])
  ```
  
  
  - IchimokuCloud
    - Parameters:
      - conversionPeriod: integer
      - basePeriod: integer
      - spanPeriod: integer
      - displacement: integer
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```javascript
    const ichimokuCloud = require('trading-indicator').ichimokuCloud
    console.log(await ichimokuCloud(9, 26, 52, 26, 'binance', 'BTC/USDT', '1h', false))
  ```
    
  - MACD (Moving Average Convergence Divergence)
    - Parameters:
      - Fast period: integer
      - Slow period: integer
      - Signal period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```javascript
      const ichimokuCloud = require('trading-indicator').ichimokuCloud
      console.log(await ichimokuCloud(9, 26, 52, 26, 'binance', 'BTC/USDT', '1h', false))
  ```

  - MFI
    - Parameters:
      - MFI period: integer
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
    
  ```javascript
     const mfi = require('trading-indicator').mfi
     console.log(await mfi(14, "binance", "BTC/USDT", "15m", true))
   ```

  
  - OBV
    - Parameters:
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
    
  ```javascript
     const obv = require('trading-indicator').obv
     console.log(await obv("binance", "BTC/USDT", "15m", true))
   ```

  
  - RSI
    - Parameters:
      - RSI period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
    
  ```javascript
     const rsi = require('trading-indicator').rsi
     console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))
   ```

  - SMA (Simple Moving Average)
    - Parameters:
      - MA period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```javascript
    const sma = require('trading-indicator').sma
    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(smaData[smaData.length - 1])
  ```
  
  - Stochastic RSI
    - Parameters:
      - kPeriod: integer
      - dPeriod: integer
      - rsiPeriod: integer
      - stochasticPeriod: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
    
  ```javascript
     const stochasticRSI = require('trading-indicator').stochasticRSI
     console.log(await stochasticRSI(3, 3, 14, 14, "close", "binance", "BTC/USDT", "15m", true))
   ```

  - WMA (Weighted Moving Average)
    - Parameters:
      - MA period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```javascript
    const wma = require('trading-indicator').wma
    let wmaData = await wma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(wmaData[wmaData.length - 1])
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

## Dependencies
- [![ccxt](https://camo.githubusercontent.com/509b94aa541a5c3b461d1a84469f4b3d4112af57/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434358542d6365727469666965642d677265656e2e7376673f73616e6974697a653d74727565)](https://github.com/ccxt/ccxt)
- [technicalindicators](https://github.com/anandanand84/technicalindicators)
