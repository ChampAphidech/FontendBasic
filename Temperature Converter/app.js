const celciusIn = document.getElementById("celcius")
const fahrenheitIn = document.getElementById("fahrenheit")
const kelvinIn = document.getElementById("kelvin")
const tempInput = document.querySelectorAll("input")

tempInput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempValue = parseInt(e.target.value)
        let inputName = e.target.name
        // console.log("temp ",tempValue,"unit ",inputName)

        //null value
        if (e.target.value === "") {
            celciusIn.value=null
            fahrenheitIn.value=null
            kelvinIn.value=null
            return
        }
        //proocess change temp
        if(inputName==="celcius"){
            //C to F
            let fahrenheit = tempValue * 1.80 + 32
            fahrenheitIn.value = fahrenheit.toFixed(2)

             //C to K
             let kelvin = tempValue + 273 
             kelvinIn.value = kelvin.toFixed(2)
        }else if(inputName==="fahrenheit"){
             //F to C
             let celcius = (tempValue -32)/1.8
             celciusIn.value = celcius.toFixed(2)
 
            //F to K
            let kelvin = (tempValue -32)/1.8 + 273 
            kelvinIn.value = kelvin.toFixed(2)
        }else if(inputName==="kelvin"){
            //K to C
            let celcius = tempValue -273
            celciusIn.value = celcius.toFixed(2)

           //K to F
           let fahrenheit = (tempValue -273)*1.8 + 32
           fahrenheitIn.value = fahrenheit.toFixed(2)
       }
    })
})