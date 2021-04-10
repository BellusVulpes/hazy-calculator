const calculate = (calculationSteps) => {
    //push remaining to array
    let calculation = []
    //run through array
    for (let i = 0; i < calculationSteps.length; i++) {
        //filter out extra
        let equation = calculationSteps.filter(extra => {
            return noNumber(extra)
        })
        return equation
    }
    
    //push remaining to array
    //if null set to 0
    //convert string to integers
    //solve equation
    //return result
}

//filter out extra
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