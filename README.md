# trading-indicator

provide trading technical indicator values


## Installation
Node.js version 10 or later is required
```bash
npm install --save trading-indicator
```

## Available Indicators
  - RSI
    - Parameters:
      - RSI period: integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
    
  ```bash
     const rsi = require(trading-indicator).rsi
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
  ```bash
    const sma = require(trading-indicator).sma
    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(smaData[smaData.length - 1])
  ```
  - BB (Bollinger bands)
    - Parameters:
      - Bollinger bands period: integer
      - sdtDev : integer
      - Input source: "open" |  "high" | "low" | "close"
      - Exchange
      - Ticker
      - Interval
      - IsFuture exchange : true if future exchange (default is false, means that spot exchange)
  ```bash
      const bb = require(trading-indicator).bb
      let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
      console.log(bbData[bbData.length - 2])
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
  ```bash
      const macd = require(trading-indicator).macd
      let macdData = await macd(12, 26, 9, "close", "binance", "BTC/USDT", "15m", true)
      console.log(macdData[macdData.length - 2])
  ```
  
  ## Supported exchanges
  
  https://github.com/ccxt/ccxt#certified-cryptocurrency-exchanges
  
  https://github.com/ccxt/ccxt#supported-cryptocurrency-exchange-markets
  
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
