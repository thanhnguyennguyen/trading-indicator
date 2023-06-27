const { eveningstar, eveningdojistar } = require('technicalindicators')

const isEveningStarPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-4, -1),
      high: input.high.slice(-4, -1),
      low: input.low.slice(-4, -1),
      close: input.close.slice(-4, -1),
    }
    return eveningstar(singleInput)
  } catch (err) {
    throw err
  }
}

const isEveningDojiStarPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-4, -1),
      high: input.high.slice(-4, -1),
      low: input.low.slice(-4, -1),
      close: input.close.slice(-4, -1),
    }
    return eveningdojistar(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isEveningStarPattern,
  isEveningDojiStarPattern,
}
