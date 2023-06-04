let slidebtns = document.querySelector(".slidebtns");
// console.log(slidebtns);
let shoecards = document.querySelectorAll(".shoecard");
// console.log(shoecards);
let cardlen = shoecards.length;
// console.log(cardlen);
let cardarr = [].slice.call(shoecards);
// console.log(cardarr);
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
// console.log(prev,next)
// prev.addEventListener("click",(e)=>{
//     // console.log(e.target)
//     cardarr.scrollBy(350,0)
// })
// next.addEventListener("click",(e)=>{
//     cardarr.scrollBy(-350,0)
// })

function scrolll(){
    var left = document.querySelector(".mainshoe");
    left.scrollBy(-1250,0)
}
function scrollr(){
    var right = document.querySelector(".mainshoe");
    right.scrollBy(1250,0)
}
setInterval(() => {
    var auto = document.querySelector(".mainshoe");
    auto.scrollBy(1250,0)
}, 5000);
// let buynow = document.querySelectorAll(".buynow");
let cartnumber=document.querySelector(".cartitems");
let cartitem = 0;
let cartlist =[]
let buybut1 = document.querySelector(".buybut1");
let buybut2 = document.querySelector(".buybut2");
let buybut3 = document.querySelector(".buybut3");
let buybut4 = document.querySelector(".buybut4");
buybut1.addEventListener("click",(e)=>{
    cartitem=cartitem+1;
    cartnumber.innerHTML = cartitem;
    cartlist.push(e.target);
})
buybut2.addEventListener("click",(e)=>{
    cartitem=cartitem+1;
    cartnumber.innerHTML = cartitem;
    cartlist.push(e.target);
})
buybut3.addEventListener("click",(e)=>{
    cartitem=cartitem+1;
    cartnumber.innerHTML = cartitem;
    cartlist.push(e.target);
})
buybut4.addEventListener("click",(e)=>{
    cartitem=cartitem+1;
    cartnumber.innerHTML = cartitem;
    cartlist.push(e.target);
})
console.log(cartlist);

// let about_img = document.querySelectorAll(".aboutimgs");
let rand1 = document.querySelector(".random1")
let rand2 = document.querySelector(".random2")
let rand3 = document.querySelector(".random3")

images = ['1.png','2.png','3.png','4.png','0.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png','21.png','22.png','23.png','24.png','25.png','26.png','27.png','28.png','29.png','30.png'];

setInterval(() => {
    let random1 = Math.floor(Math.random()*30);
    let random2 = Math.floor(Math.random()*30);
    let random3 = Math.floor(Math.random()*30);
    rand1.setAttribute("src",images[random1]);
    rand2.setAttribute("src",images[random2]);
    rand3.setAttribute("src",images[random3]);
}, 500);
function random() {    
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let c = `rgb(${red},${green},${blue})`;
    return c;
}
let abouthead =document.querySelector(".about_head")
// setInterval(() => {
//     // abouthead.style.backgroundColor = random();
// }, 1000);