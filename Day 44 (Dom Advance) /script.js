{
    let top = 0
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




{
    let btn = document.querySelector("button")
    let img = document.querySelectorAll("img")

    btn.addEventListener("click", () => {
        let x1 = img[0].src
        let x2 = img[1].src

        // console.log(x1);


        img[0].setAttribute("src", x2)
        img[1].setAttribute("src", x1)
    })
}

{
    let btn = document.querySelector(".God_mod")
    let box = document.querySelector(".Domain")

    let arr = [
        "./public/Pasted image.png",
        "./public/Pasted image (2).png",
        "./public/Pasted image (3).png",
        "./public/Pasted image (4).png",
        "./public/Pasted image (5).png",
        "./public/Pasted image (6).png",
    ]

    let len = arr.length

    btn.addEventListener("click", () => {
        let num = Math.floor(Math.random() * len)

        let x = Math.random() * 90 + "%"
        let y = Math.random() * 90 + "%"

        let charcter = document.createElement("img")
        charcter.setAttribute("src", arr[num])
        charcter.style.position = "absolute"
        charcter.style.top = x
        charcter.style.left = y

        box.appendChild(charcter)

        console.log(charcter);
        

    })
}
