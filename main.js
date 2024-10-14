let span =document.querySelector(".up");

window.onscroll =function(){
    if(this.scrollY >= 500){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
}

span.onclick =function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

let icon = document.getElementsByClassName("navbar-toggler")[0];

let nav =document.getElementsByClassName("navbar")[0];

if(icon.onclick){
    nav.style.height="300px";
}
