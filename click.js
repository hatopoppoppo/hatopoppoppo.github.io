let x,y,random
let num = 0
const Figure = ["circle","diamond","box"]
const Color = ["#"]
const main = document.querySelector("body")

let getWindow = () => {
}
let getPosition = (position) => {
    x = position.pageX
    y = position.pageY
    num++
    setAnimation()
}

let setAnimation = () => {
  randam = Figure[Math.floor(Math.random() * Figure.length)]
  let div = document.createElement("div");
  div.id = "div" + num
  div.classList = randam + " figure"
  main.appendChild(div)
  div.style.top = y - 50 + "px"
  div.style.left = x - 50 + "px"
  setTimeout(function(){
    let clicklist = document.querySelectorAll(".figure")
    main.removeChild(clicklist[0])
  }, 1000);
}
window.addEventListener("load", getWindow,false)
document.addEventListener("click",getPosition,Event)