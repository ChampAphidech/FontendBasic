const container = document.querySelector(".container")

//async Wait until it's complete. รอจนครบก่อน จึงแสดงผล
const getCountries = async()=>{
    const url = 'https://restcountries.com/v3.1/all'
    //result รอข้อมูลมาครบก่อนค่อยไปทำบรรทัดไป
    const res =  await fetch(url)
    const items= await res.json()
    console.log(items)
    items.forEach(element => {
       createCard(element)
    });
}

const createCard=(data)=>{
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flags.svg}" />
        </div>
        <div class="info">
            <h3 class="name">${data.name.common}</h3>
            <p>Capital : <span>${data.capital}</span></p>
        </div>
    `
    cardEl.innerHTML=contentHTML
    container.appendChild(cardEl)
} 

getCountries()
