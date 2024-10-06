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
    cardEl.classList.add("contry")
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flag.png}" />
        </div>
        <div class="info">
            <h3 class="name">${data.name.common}</h3>
            <small>Capital : <span>${data.capital}</span></small>
        </div>
    `
    // cardEl.innerHTML=contentHTML
    // container.appendChild(cardEl)
} 

getCountries()
