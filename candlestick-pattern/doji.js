const { dragonflydoji, gravestonedoji } = require('technicalindicators')

const THRESHOLD = parseFloat(2 / 10_000)

const isDojiPattern = async (input) => {
  try {
    const last = input.close.length - 1
    const body = Math.abs(input.close[last -1] - input.open[last - 1])
    if (parseFloat(body / input.close.slice(-1)) < THRESHOLD) {
      return true
    }
    return false
  } catch (err) {
    throw err
  }
}

const isDragonFlyDojiPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-2, -1),
      high: input.high.slice(-2, -1),
      low: input.low.slice(-2, -1),
      close: input.close.slice(-2, -1),
    }
    return dragonflydoji(singleInput)
  } catch (err) {
    throw err
  }
}
const isGraveStoneDojiPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-2, -1),
      high: input.high.slice(-2, -1),
      low: input.low.slice(-2, -1),
      close: input.close.slice(-2, -1),
    }
    return gravestonedoji(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isDojiPattern,
  isDragonFlyDojiPattern,
  isGraveStoneDojiPattern,
}
