const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

//check event click
btn.addEventListener("click",(e) => {
    // console.log("click")
    //select element
    coupon.select()
    //set range inde 0 - 999999
    coupon.setSelectionRange(0,999999)
    //copy to clipboard
    navigator.clipboard.writeText(coupon.value)
    //after click button change text
    btn.textContent="คัดลอกได้แล้ว"
    //set time after click 3 second
    setTimeout( () => {
        //change text after click 3 second
        btn.textContent="คัดลอก"
    },3000)
})