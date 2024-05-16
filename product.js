var menu = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var xclose = document.getElementById("xclose")
var search = document.getElementById("search")
var product__list = document.getElementById("product__list")
var product__names = product__list.querySelectorAll("h1")
console.log(product__names);

menu.addEventListener("click",function(){
    sidenav.style.right = 0
})

xclose.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})

search.addEventListener("keyup", function(event){
    var inputval = event.target.value
    
    for (let i = 0; i < product__names.length; i++) {
        if (product__names[i].textContent.toUpperCase().includes(inputval.toUpperCase()) == true) 
        {
            product__names[i].parentElement.style.display = "block"
        } else {
            product__names[i].parentElement.style.display = "none"
        }
        
    }
})