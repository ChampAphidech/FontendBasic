const result = document.getElementById("result")
const listItem = []

//async ดึงข้อมูลมาให้ครบก่อนแสดงผล
async function getData(){
    const url ="https://restcountries.com/v3.1/all"
    //await รอให้ดึงข้อมูลมาให้ครบค่อยทำอย่างอื่น
    const response =  await fetch(url)
    const item = await response.json()
    console.log(item);
    result.innerHTML=""
    item.forEach(data => {
        const li = document.createElement("li")
        listItem.push(li)
        //show data from li
        li.innerHTML=`
        <div class="img-container">
            <img src="${data.flags.svg}" />
        </div>
        <div class="info">
            <h3>${data.name.common}</h3>
            <p>Population : <span>${data.population}</span></p>
            <p>Capital : <span>${data.capital}</span></p>
        </div>
        `
        result.appendChild(li);
    });

}

getData()