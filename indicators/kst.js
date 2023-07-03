const indicators = require('technicalindicators')

const kst = async (
  input,
  rocLength1,
  rocLength2,
  rocLength3,
  rocLength4,
  smaLength1,
  smaLength2,
  smaLength3,
  smaLength4,
  signalPeriod
) => {
  try {
    let kstInput = {
      values: input.close,
      ROCPer1: rocLength1,
      ROCPer2: rocLength2,
      ROCPer3: rocLength3,
      ROCPer4: rocLength4,
      SMAROCPer1: smaLength1,
      SMAROCPer2: smaLength2,
      SMAROCPer3: smaLength3,
      SMAROCPer4: smaLength4,
      signalPeriod: signalPeriod,
    }
    return await indicators.KST.calculate(kstInput)
  } catch (err) {
    throw err
  }
}
module.exports = {
  kst,
}
