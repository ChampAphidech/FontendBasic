const celciusIn = document.getElementById("celcius")
const fahrenheitIn = document.getElementById("fahrenheit")
const kelvinIn = document.getElementById("kelvin")
const tempInput = document.querySelectorAll("input")

tempInput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempValue = parseInt(e.target.value)
        let inputName = e.target.name
        console.log("temp ",tempValue,"unit ",inputName)

        //null value
        if (e.target.value === "") {
            celciusIn.value=null
            fahrenheitIn.value=null
            kelvinIn.value=null
            return
        }
        //proocess change temp
    })
})