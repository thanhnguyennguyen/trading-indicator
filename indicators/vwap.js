const indicators = require('technicalindicators')

const vwap = async (vwapInput) => {
  try {
    return await indicators.VWAP.calculate(vwapInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  vwap,
}
