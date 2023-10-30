/* function functionName(parameters){
    // function body
    // return
}
let returnValue = functionName(parameters value) */

function getAverage(assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + assingment3
    const average = total / 3
    return average
}
const assingment1Marks = 60;
const assingment2Marks = 60;
const assingment3Marks = 60;

let myAverage = getAverage(assingment1Marks, assingment2Marks, assingment3Marks)
console.log('my average so far: ', myAverage);