const { darkcloudcover } = require('technicalindicators')

const isDarkCloudCoverPattern = async (input) => {
  try {
    let singleInput = {
      open: input.open.slice(-3, -1),
      high: input.high.slice(-3, -1),
      low: input.low.slice(-3, -1),
      close: input.close.slice(-3, -1),
    }
    return darkcloudcover(singleInput)
  } catch (err) {
    throw err
  }
}

module.exports = {
  isDarkCloudCoverPattern,
}
