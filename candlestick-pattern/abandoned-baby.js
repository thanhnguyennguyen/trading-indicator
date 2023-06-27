const { abandonedbaby } = require('technicalindicators')
const isAbandonedBabyPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-4, -1),
      high: input.high.slice(-4, -1),
      low: input.low.slice(-4, -1),
      close: input.close.slice(-4, -1),
    }
    return abandonedbaby(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isAbandonedBabyPattern,
}
