//we work for a company building a smart home thermometer. Our most recent task is
//"Given an array of temperatures of one day, calculate the temp amplitude
const temperatures = [3,-2,-6,-1,'error',9,13,17,15,14,9,5]
//what is amplitude ? difference between highest and lowest temperatures
//what a sensor errorand what to do when one occurs
//Given an array of forecasted max temperatures ,the thermometers displays a string with these temperatures
 const data1 = [17,21,23]
const data2 = [12,5,-5,0,4]
const printForecast = function (arr) {
    let str = ''
    for (let i = 0; i<arr.length; i++) {
        str = str + `${arr[i]}°C in ${i+1} days ...`
    }
    console.log(`...` + str)
}
console.log(printForecast(data1))
console.log(printForecast(data2))
