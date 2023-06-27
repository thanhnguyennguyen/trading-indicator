const { bullishmarubozu, bearishmarubozu } = require('technicalindicators')

const isBullishMarubozuPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-2, -1),
      high: input.high.slice(-2, -1),
      low: input.low.slice(-2, -1),
      close: input.close.slice(-2, -1),
    }
    return bullishmarubozu(singleInput)
  } catch (err) {
    throw err
  }
}
const isBearishMarubozuPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-2, -1),
      high: input.high.slice(-2, -1),
      low: input.low.slice(-2, -1),
      close: input.close.slice(-2, -1),
    }
    return bearishmarubozu(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isBullishMarubozuPattern,
  isBearishMarubozuPattern,
}
