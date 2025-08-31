{
    let top =  0 
    let nav = document.querySelector("nav")

    window.addEventListener("scroll", () => {
        let current = document.documentElement.scrollTop || window.pageYOffset

        if (current > top) {
            nav.style.top = "-100px"
        }
        else {
            nav.style.top = "0"
        }

        top = current <= 0 ? 0 : current
    })

}
