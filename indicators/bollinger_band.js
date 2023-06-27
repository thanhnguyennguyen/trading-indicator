const indicators = require('technicalindicators')

const bb = async (bbLength, stdDev, sourceType, input) => {
  try {
    return await indicators.BollingerBands.calculate({
      values: input[sourceType],
      period: bbLength,
      stdDev: stdDev,
    })
  } catch (err) {
    throw err
  }
}
module.exports = {
  bb,
}
