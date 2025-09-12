{
    let body = document.body
    let cards = document.querySelectorAll(".card")
    let theme = document.querySelector(".theme")
    let moon = document.querySelector(".ri-moon-fill")
    let sun = document.querySelector(".ri-sun-fill")


    let d_theme = "dark_theme"
    let l_theme = "light_theme"

    let card_l = "card_light"
    let card_d = "card_dark"

    function theme_fuc() {
        let main_theme = localStorage.getItem("theme")
        let card_theme = localStorage.getItem("card_theme")
        let theme_logo = localStorage.getItem("theme_logo_disabled")


        if (main_theme === null) {
            cards.forEach((card) => {
                card.classList.add(card_l)
            })
            body.classList.add(l_theme)
            document.querySelector(`.ri-sun-fill`).classList.add("disable")
        }

        cards.forEach((card) => {
            card.classList.add(card_theme)
        })

        body.classList.add(main_theme)
        document.querySelector(`.${theme_logo}`).classList.add("disable")
    }

    theme_fuc()

    theme.addEventListener("click", (x) => {
        let my_target = x.target
        let target_class = my_target.getAttribute("class")
        let nav = document.querySelector("nav")
        let my_theme = localStorage.getItem("theme")

        body.style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) 1s"

        if (my_theme === null || my_theme === l_theme) {
            // Dark Theme

            cards.forEach((card) => {
                card.classList.add(card_d)
                card.classList.remove(card_l)

            })

            body.classList.add(d_theme)
            body.classList.remove(l_theme)

            moon.classList.add("disable")
            sun.classList.remove("disable")


            localStorage.setItem("theme", d_theme)
            localStorage.setItem("card_theme", card_d)
            localStorage.setItem("theme_logo_disabled", `ri-moon-fill`)

        } else {
            // Light Theme

            cards.forEach((card) => {
                card.classList.add(card_l)
                card.classList.remove(card_d)
            })

            body.classList.add(l_theme)
            body.classList.remove(d_theme)

            sun.classList.add("disable")
            moon.classList.remove("disable")

            localStorage.setItem("theme", l_theme)
            localStorage.setItem("card_theme", card_l)
            localStorage.setItem("theme_logo_disabled", `ri-sun-fill`)
        }

    })

    // localStorage.clear()

}
