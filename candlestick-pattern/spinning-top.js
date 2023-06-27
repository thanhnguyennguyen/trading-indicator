const { bearishspinningtop, bullishspinningtop } = require('technicalindicators')

const isBullishSpinningTopPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-2, -1),
      high: input.high.slice(-2, -1),
      low: input.low.slice(-2, -1),
      close: input.close.slice(-2, -1),
    }
    return bullishspinningtop(singleInput)
  } catch (err) {
    throw err
  }
}

const isBearishSpinningTopPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-2, -1),
      high: input.high.slice(-2, -1),
      low: input.low.slice(-2, -1),
      close: input.close.slice(-2, -1),
    }
    return bearishspinningtop(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isBearishSpinningTopPattern,
  isBullishSpinningTopPattern,
}
