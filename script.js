var menu = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var xclose = document.getElementById("xclose")

menu.addEventListener("click",function(){
    sidenav.style.right = 0
})

xclose.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})