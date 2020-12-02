export default {
    name: 'Menu',
    methods: {
        MenuAction() {
            let menu = document.querySelector(".menu__sideMenu");
            let menubtn = document.querySelector(".menu__openbtn");
            let home = document.querySelector(".home");

            if (menu.style.width == "250px") {
                menu.style.width = "0";
                menubtn.style.marginLeft = "0";
                if(home) {
                    home.style.marginLeft = "0";
                }
                
            } else {
                menu.style.width = "250px";
                menubtn.style.marginLeft = "250px";
                if(home) {
                    home.style.marginLeft = "250px";
                }
            }
            
        }
    }
}