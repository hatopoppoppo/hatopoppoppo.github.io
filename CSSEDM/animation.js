let x,y,vw,random
let num = 0
const Figure = ["circle","diamond","box"]
const main = document.querySelector("#click")

let getWindow = () => {
  vw = window.innerWidth / 2;
}
let getPosition = (position) => {
  x = position.pageX
  y = position.pageY
  console.log("x:"+x+" y:"+y)
  console.log(vw)
  num++
  setAnimation()
}

let setAnimation = () => {
  randam = Figure[Math.floor(Math.random() * Figure.length)]
  let div = document.createElement("div");
  div.id = "div" + num
  div.classList = randam + " figure"
  main.appendChild(div)
  console.log(div)
  div.style.top = y - 100 + "px"
  div.style.left = x - 100 + "px"
  setTimeout(function(){
    let clicklist = document.querySelectorAll(".figure")
    console.log(clicklist)
    main.removeChild(clicklist[0])
  }, 1000);
}
window.addEventListener("load", getWindow,false)
document.addEventListener("click",getPosition,Event)