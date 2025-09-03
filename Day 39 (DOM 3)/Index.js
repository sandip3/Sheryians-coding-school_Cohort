{
    let btn = document.querySelector("button")
    let progress = document.querySelector(".com")

    
    
    btn.addEventListener("click", () => {
        let x = 0
        
        let ran = (Math.floor(Math.random() * 10) * 10)
        console.log(ran);
        

        let loop = setInterval(() => {
            x++
            progress.style.width = x + "%"

            btn.textContent = "Downloading"

        }, ran)

        setTimeout(() => {
            clearInterval(loop)

            btn.textContent = "Download Complete"
            x = 0
        }, ran * 100)

    })

}
