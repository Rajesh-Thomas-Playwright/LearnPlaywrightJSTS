let temp = 8

let feel = (temp >= 40 ) ? "Very Hot" 
    : (temp >= 30) ? "hot" 
    : (temp >= 20) ? "warm"
    : (temp >= 10) ? "Cool" : "Cold"

    console.log("Temparatire:", temp , "| Feel:", feel)