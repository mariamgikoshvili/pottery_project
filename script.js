let burger = document.querySelector(".burger")

let xmark = document.querySelector(".xmark")

let menu = document.querySelector(".header_nav")

burger.addEventListener("click", ()=>
{
    menu.classList.add("show")
    xmark.style.display = "block"
    burger.style.display = "none"
}
)

xmark.addEventListener("click", ()=>
    {
        menu.classList.remove("show")
        xmark.style.display = "none"
        burger.style.display = "block"
    }
    )

