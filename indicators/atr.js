const indicators = require('technicalindicators')

const atr = async (period, input) => {
  try {
    let atrInput = {
      ...input,
      period: period,
    }
    return await indicators.atr.calculate(atrInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  atr,
}
