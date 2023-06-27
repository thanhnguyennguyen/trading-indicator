const { bearishharami, bullishharami, bullishharamicross, bearishharamicross } = require('technicalindicators')

const isBearishHaramiPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return bearishharami(singleInput)
  } catch (err) {
    throw err
  }
}

const isBullishHaramiPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return bullishharami(singleInput)
  } catch (err) {
    throw err
  }
}

const isBullishHaramiCrossPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return bullishharamicross(singleInput)
  } catch (err) {
    throw err
  }
}
const isBearishHaramiCrossPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return bearishharamicross(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isBullishHaramiCrossPattern,
  isBearishHaramiCrossPattern,
  isBullishHaramiPattern,
  isBearishHaramiPattern,
}
