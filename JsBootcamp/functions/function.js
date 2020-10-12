let greetUser = function(){
    console.log('Hello funtion')
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num*num
    return result
}

let squareValue = square(5)
console.log(squareValue)

console.log(square(7))

let farenhiteToCelsius = function(temp){
    let result = (temp - 32)*(5 / 9)
    return result
}

console.log("102 degree farenhite =" + farenhiteToCelsius(102) + " degree celsius")
console.log("73 degree farenhite =" + farenhiteToCelsius(73) + " degree celsius")
