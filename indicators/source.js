const timeIndex = 0,
  oIndex = 1,
  hIndex = 2,
  lIndex = 3,
  cIndex = 4,
  vIndex = 5
const detachSource = (ohlcv) => {
  let source = []
  source['open'] = []
  source['high'] = []
  source['low'] = []
  source['close'] = []
  source['volume'] = []
  if (ohlcv.length == 0) {
    return source
  }
  ohlcv.forEach((data) => {
    source['open'].push(data[oIndex])
    source['high'].push(data[hIndex])
    source['low'].push(data[lIndex])
    source['close'].push(data[cIndex])
    source['volume'].push(data[vIndex])
  })
  return source
}
module.exports = detachSource
