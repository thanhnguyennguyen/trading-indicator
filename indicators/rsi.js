const indicators = require('technicalindicators')

const rsi = async (rsiLength, sourceType, input) => {
  try {
    let rsiInput = {
      values: input[sourceType],
      period: rsiLength,
    }
    return await indicators.RSI.calculate(rsiInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  rsi,
}
