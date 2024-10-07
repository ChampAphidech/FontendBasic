const serch = document.querySelector(".serch")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=> {
    serch.classList.toggle("active")
    input.focus()
})