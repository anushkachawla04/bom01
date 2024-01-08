// console.log(window.innerHeight)

// console.log("Inner Width = ",window.innerWidth)
// console.log(screen.availHeight)
// console.log(screen.availWidth)
let a;
let btn1=document.getElementById("btn1")

btn1.addEventListener('click',function(){
   a=window.open("","","width=200 height=100")
})

let btn2=document.getElementById("btn2")
btn2.addEventListener('click',function(){
    a.window.close()
})