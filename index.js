const calculate = (calculationSteps) => {
  // push remaining to array
  let calculation = []
  // filter out extra
  let equation = calculationSteps.filter(extra => {
    return noNumber(extra)
  })

  // run through array
  for (let i = 0; i < equation.length; i++) {
    switch (equation) {
      case '*':
        return answer = parseInt(equation[0]) * parseInt(equation[2])
      case '/':
        return answer = parseInt(equation[0]) / parseInt(equation[2])
      case '+':
        return answer = parseInt(equation[0]) + parseInt(equation[2])
      case '-':
        return answer = parseInt(equation[0]) - parseInt(equation[2])
      default:
        return NaN
    }
  }
  // push remaining to array
  // if null set to 0
  // convert string to integers
  // solve equation
  // return result
}

// filter out extra
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
