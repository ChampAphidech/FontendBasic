const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement

document.addEventListener("scroll",showBtn)

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    // console.log(rootEl.scrollTop/scrollTotal)//0 - 1
    if(rootEl.scrollTop/scrollTotal>0.3){
        scrollBtn.classList.add("show-btn")
    }
    else{
        scrollBtn.classList.remove("show-btn")
    }
}

//normal func
// scrollBtn.addEventListener("click",scrollToTopFunc)
// function scrollToTopFunc(){
//     rootEl.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// }

//arrow func
scrollBtn.addEventListener("click",()=>{
    rootEl.scrollTo({
                top:0,
                behavior:"smooth"
            })
})