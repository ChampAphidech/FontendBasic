const sounds = ["Effect1","Effect2","Effect3","Effect4","Effect5"]

sounds.forEach(sound=>{
    const btn = document.createElement("button")
    //add class btn
    btn.classList.add("btn")
    //add text button
    btn.innerText = sound
    btn.addEventListener("click",()=>{
        stopSounds()
        document.getElementById(sound).play()
    })
    document.getElementById("controller").appendChild(btn)
})

function stopSounds(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        //set start time = 0
        song.currentTime = 0
    })
}