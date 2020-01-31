# trading-indicator

provide trading technical indicator values


## Installation
Node.js version 10 or later is required
```bash
npm install --save trading-indicator
```

## Available Indicators
  - RSI
    ```bash
      const rsi = require(trading-indicator).rsi
      console.log(await rsi(14, "close", "binance", "BTC/USDT", "15m", true))
    ```

  - SMA (Simple Moving Average)
  ```bash
    const sma = require(trading-indicator).sma
    let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
    console.log(smaData[smaData.length - 1])
  ```
  - BB (Bollinger bands)
  ```bash
      const bb = require(trading-indicator).bb
      let bbData = await bb(50, 2, "close", "binance", "BTC/USDT", "15m", true)
      console.log(bbData[bbData.length - 2])
  ```
  - MACD (Moving Average Convergence Divergence)
  ```bash
      const macd = require(trading-indicator).macd
      let macdData = await macd(12, 26, 9, "close", "binance", "BTC/USDT", "15m", true)
      console.log(macdData[macdData.length - 2])
  ```
  
