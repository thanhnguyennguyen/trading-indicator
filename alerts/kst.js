const { crossover, crossunder } = require('../utils/cross.js')
const { kst } = require('../indicators/kst.js')

const kstCross = async (
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
  const kstData = await kst(
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
  )
  const kstLastData = kstData.slice(-2)
  const kstValues = [kstLastData[0].kst, kstLastData[1].kst]
  const signalValues = [kstLastData[0].signal, kstLastData[1].signal]

  const up = crossover(kstValues, signalValues)
  const down = crossunder(kstValues, signalValues)
  return {
    cross: up || down,
    direction: up ? 'up' : down ? 'down' : 'none',
  }
}
module.exports = {
  kstCross,
}
