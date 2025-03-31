document,addEventListener("DOMContentLoaded", (event) =>{

    //seleccionar dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    //funcion ocultar mostrar boton
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");
        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        }
    };


    //posibilidad de dar clic al boton de menu mostrar menu de navegacion
    mobile_btn.addEventListener("click", showHiddenMenu);

    //redimensionar pantalla max 1200px ocultar menu
    window.addEventListener("resize", () => {
        let window_width = document.body.clientWidth;
        if(window_width >= "1200"){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    //cerrar menu boton x

    let btn_close = document.querySelector(".menu-mobile__close");
    btn_close.addEventListener("click", showHiddenMenu);

    //desplegar submenus

    let menu_item = document.querySelectorAll (".menu-mobile__item");

    menu_item.forEach(item => {
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;
            
            if(submenu.className === "menu-mobile__submenu-mobile"){
                if (submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }

        });
    });

});