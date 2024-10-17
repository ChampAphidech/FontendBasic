//async ดึงข้อมูลมาให้ครบก่อนแสดงผล
async function getData(){
    const url ="https://restcountries.com/v3.1/all"
    //await รอให้ดึงข้อมูลมาให้ครบค่อยทำอย่างอื่น
    const response =  await fetch(url)
    const item = await response.json()
    console.log(item);

}

getData()