let burger = document.querySelector(".hamBurger");
        let navBar = document.querySelector(".navbar");
        let navLink = document.querySelectorAll(".navContent ul li a");

        burger.addEventListener("click", () =>{
            navBar.classList.toggle("nav-active")
        })
        
        navLink.forEach(element => {
            element.addEventListener("click" , () => {
                navBar.classList.toggle("nav-active")
            })
        });