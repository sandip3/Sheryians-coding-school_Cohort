let btn = document.querySelector("button")
let box = document.querySelector(".box")

btn.addEventListener("click", () => {
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)

    let px = Math.floor(Math.random() * 8)+4
    let br = Math.floor(Math.random() * 51)

    box.style.backgroundColor = `rgb( ${c1} , ${c2} , ${c3} )`
    box.style.border = `${px}px solid rgb( ${c3} , ${c2} , ${c1} )`
    box.style.borderRadius = `${br}%`
})
