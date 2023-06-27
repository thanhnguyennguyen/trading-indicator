const indicators = require('technicalindicators')

const obv = async (input) => {
  try {
    let obvInput = input
    return await indicators.OBV.calculate(obvInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  obv,
}
