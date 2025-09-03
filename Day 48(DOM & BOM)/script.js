{
    let x = document.body
    let btn = document.querySelector("button")

    function theme_func() {
        let theme = localStorage.getItem("theme")
        let btn_theme = localStorage.getItem("btn_theme")

        x.classList.add(theme)
        btn.classList.add(btn_theme)
    }
    theme_func()

    btn.addEventListener("click", () => {
        let theme = localStorage.getItem("theme")

        let dark_theme = "dark"
        let light_theme = "light"

        if (theme === null || theme === "dark") {

            x.classList.add(light_theme)
            x.classList.remove(dark_theme)

            btn.classList.add(dark_theme)
            btn.classList.remove(light_theme)

            localStorage.setItem("theme", light_theme)
            localStorage.setItem("btn_theme", dark_theme)
        }
        else {
            x.classList.add(dark_theme)
            x.classList.remove(light_theme)

            btn.classList.add(light_theme)
            btn.classList.remove(dark_theme)

            localStorage.setItem("theme", dark_theme)
            localStorage.setItem("btn_theme", light_theme)
        }
    })
}
