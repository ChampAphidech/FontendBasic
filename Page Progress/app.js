const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    /*ขนาดความสูงเว็บทั้งหมด = ความสูงในเว็บรวม scrollbar - ความสูงในเว็บไม่รวม scrollbar*/
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop/pageHeight)*100
    //console.log(scrollPercentage)
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercentage+"%"
}