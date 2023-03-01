


const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const black = document.querySelector(".black")
const bike = document.querySelector(".container")




let changeRed = ()=>{
    bike.style.backgroundImage = "url(assets/BMW1.png"
}
let changeBlue= ()=>{
    bike.style.backgroundImage = "url(assets/BMW2.png"
}
let changeBlack = ()=>{
    bike.style.backgroundImage = "url(assets/BMW3.png"
}


red.addEventListener("click",changeRed)
blue.addEventListener("click",changeBlue)
black.addEventListener("click",changeBlack)
