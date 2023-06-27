const { shootingstar } = require('technicalindicators')

const isShootingStarPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-6, -1),
      high: input.high.slice(-6, -1),
      low: input.low.slice(-6, -1),
      close: input.close.slice(-6, -1),
    }
    return shootingstar(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isShootingStarPattern,
}
