const { bearishengulfingpattern, bullishengulfingpattern } = require('technicalindicators')

const isBearishEngulfingPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return bearishengulfingpattern(singleInput)
  } catch (err) {
    throw err
  }
}

const isBullishEngulfingPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return bullishengulfingpattern(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isBearishEngulfingPattern,
  isBullishEngulfingPattern,
}
