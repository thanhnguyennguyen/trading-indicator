const { morningstar, morningdojistar } = require('technicalindicators')

const isMorningStarPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-4, -1),
      high: input.high.slice(-4, -1),
      low: input.low.slice(-4, -1),
      close: input.close.slice(-4, -1),
    }
    return morningstar(singleInput)
  } catch (err) {
    throw err
  }
}

const isMorningDojiStarPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-4, -1),
      high: input.high.slice(-4, -1),
      low: input.low.slice(-4, -1),
      close: input.close.slice(-4, -1),
    }
    return morningdojistar(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isMorningStarPattern,
  isMorningDojiStarPattern,
}
