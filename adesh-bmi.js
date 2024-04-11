cases = [
    18.5,
    25,
    30
]

function calculateBMI(weight, height) {
    return (weight * height) / 6.967
}

function interpretBMI(bmi) {
    if (bmi < cases[0]) {
        console.log("Underweight")
    } else if (bmi >= cases[0] && bmi < cases[1]) {
        console.log("Normal Weight")
    } else if (bmi >= cases[1] && bmi < cases[2]) {
        console.log("Overweight")
    } else {
        console.log("Obese")
    }
}

bmi = calculateBMI(90, 1.91)
interpretBMI(bmi)