const oIndex = 0,
    hIndex = 1,
    lIndex = 2,
    cIndex = 3,
    vIndex = 4
const detachSource = (ohlcv) => {
    let source = []
    source["open"] = source["high"] = source["low"] = source["close"] = source["volume"] = []
    ohlcv.forEach(data => {
        source["open"].push(data[oIndex])
        source["high"].push(data[hIndex])
        source["low"].push(data[lIndex])
        source["close"].push(data[cIndex])
        source["volume"].push(data[vIndex])
    })
    return source
}
module.exports = detachSource
