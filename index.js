const calculate = (calculationSteps) => {
    //push remaining to array
    let equation = []
    //run through array
    for (let i = 0; i < calculationSteps.length; i++) {
        
    }
    
    //push remaining to array
    //if null set to 0
    //convert string to integers
    //solve equation
    //return result
}

//filter out extra
const noNumber = (junk) => {
    switch (junk) {
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