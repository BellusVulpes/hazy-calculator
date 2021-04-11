const calculate = (calculationSteps) => {
  let equation = calculationSteps.filter(extra => {
    return noNumber(extra)
  })

  // console.log(equation)
  for (let i = 0; i < equation.length; i++) {
    let one = parseInt(equation[i])
    let two = parseInt(equation[i = 2])
    let operand = equation[i = 1]

    // console.log(one)
    // console.log(two)
    switch (operand) {
      case operand = '*':
        let answerOne = one * two

        return answerOne
      case operand = '/':
        let answerTwo = one / two

        return answerTwo
      case operand = '+':
        let answerThree = one + two

        return answerThree
      case operand = '-':
        let answerFour = one - two

        return answerFour
      default:
        return NaN
    }
  }
}

const noNumber = (extra) => {
  switch (extra) {
    case '':
    case 'foo':
    case 'bar':
    case undefined:
      return false
    default:
      return true
  }
}

module.exports = calculate
