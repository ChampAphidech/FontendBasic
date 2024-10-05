const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

const messages=[
    "Hello",
    "Good Morning",
    "สวัสดีตอนเช้า",
    "Hi",
    "Good Night"
]

btn.addEventListener("click",()=>{
    createNotification()
})

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText = randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=> {
        notificationEl.remove()
    },3000)
}



