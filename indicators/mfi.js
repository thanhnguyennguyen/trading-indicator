const indicators = require('technicalindicators')

const mfi = async (mfiPeriod, input) => {
  try {
    let mfiInput = {
      ...input,
      period: mfiPeriod,
    }
    return await indicators.MFI.calculate(mfiInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  mfi,
}
