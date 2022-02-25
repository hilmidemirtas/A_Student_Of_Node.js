function circleArea(r) {
    let alan = Math.PI * r**2;
    console.log(alan)
}

function circleCircumference(r) {
    let cevre = Math.PI * 2 * r;
    console.log(cevre)
}

module.exports = {
    
    circleCircumference,
    circleArea
}
