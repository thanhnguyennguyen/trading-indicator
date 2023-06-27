const { downsidetasukigap } = require('technicalindicators')

const isDownsideTasukiGapPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-4, -1),
      high: input.high.slice(-4, -1),
      low: input.low.slice(-4, -1),
      close: input.close.slice(-4, -1),
    }
    return downsidetasukigap(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isDownsideTasukiGapPattern,
}
