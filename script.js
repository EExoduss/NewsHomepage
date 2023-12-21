let menuOpen = document.getElementById("open");

let menuClose = document.getElementById("close");

let aside = document.getElementById("aside");

let cover = document.getElementById("cover");

let menuStatus = "closed";

menuOpen.addEventListener("click", function(){
    cover.style.display = "block";
    aside.style.width = "70%";
    menuStatus = "open";
})

menuClose.addEventListener("click", function(){
    aside.style.width = "0";
    cover.style.display = "none";
    menuStatus = "closed";
})

document.addEventListener("click", function(e){
    if(e.target == cover && menuStatus == "open"){
        aside.style.width = "0";
        cover.style.display = "none";
    }
})
