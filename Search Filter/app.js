const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItem = []

filter.addEventListener("input",(e)=> {
    const search = e.target.value.toLowerCase()
    console.log(search)
    listItem.forEach(item=>{
        if(item.innerHTML.toLowerCase().includes(search)){
            item.classList.add("highlight")
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
            item.classList.remove("highlight")
        }
    })
})

//async ดึงข้อมูลมาให้ครบก่อนแสดงผล
async function getData(){
    const url ="https://restcountries.com/v3.1/all"
    //await รอให้ดึงข้อมูลมาให้ครบค่อยทำอย่างอื่น
    const response =  await fetch(url)
    const item = await response.json()
    // console.log(item);
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
            <p>Population : <span>${formatNumber(data.population)}</span></p>
            <p>Capital : <span>${data.capital}</span></p>
        </div>
        `
        result.appendChild(li);
    });

}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


getData()