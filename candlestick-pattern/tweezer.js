const { tweezerbottom, tweezertop } = require('technicalindicators')

const isTweezerBottomPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-6, -1),
      high: input.high.slice(-6, -1),
      low: input.low.slice(-6, -1),
      close: input.close.slice(-6, -1),
    }
    return tweezerbottom(singleInput)
  } catch (err) {
    throw err
  }
}

const isTweezerTopPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-6, -1),
      high: input.high.slice(-6, -1),
      low: input.low.slice(-6, -1),
      close: input.close.slice(-6, -1),
    }
    return tweezertop(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isTweezerTopPattern,
  isTweezerBottomPattern,
}
