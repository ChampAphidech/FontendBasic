const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e) => {
    // console.log("click")
    coupon.select()
    coupon.setSelectionRange(0,99999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="คัดลอกได้แล้ว"
    
})