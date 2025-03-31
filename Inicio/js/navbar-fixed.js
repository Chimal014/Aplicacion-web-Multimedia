document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector(".menu__navbar");

    window.addEventListener("scroll", () => {
       let scroll = window.scrollY;

       if(scroll > 110){
            navbar.classList.add("menu__navbar--fixed");
       }else{
            navbar.classList.remove("menu__navbar--fixed");
       }
    });
});