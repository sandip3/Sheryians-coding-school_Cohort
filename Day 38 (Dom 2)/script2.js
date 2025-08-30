// part - 1

{
    let btn = document.querySelector(".cricket-btn")
    let cricket = document.querySelector(".cricket-team")
    let team_logo = document.querySelector(".team-logo")
    // let team = ["CSK", "RR", "GT", "MI", "DC", "KKR", "PK", "LSG", "RCB", "SH"]
    let team = [
        {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/1-5.jpg",
            prime: "#ffe000",
            second: "rgb(82, 82, 224)"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/6-4.jpg",
            prime: "#E35A92",
            second: "blue"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/10-4.jpg",
            prime: "#000E2B",
            second: "white"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/4-4.jpg",
            prime: "#EAEFF3",
            second: "blueviolet"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/2-4.jpg",
            prime: "#02376C",
            second: "blue"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/3-4.jpg",
            prime: "#3C2563",
            second: "blueviolet"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/5-4.jpg",
            prime: "#EAEFF3",
            second: "white"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/9-4.jpg",
            prime: "#EAEFF3",
            second: "blue"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/Untitled-4.jpg",
            prime: "#D74831",
            second: "gold"
        }, {
            team: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/8-4.jpg",
            prime: "#EAEFF3",
            second: "orange"
        }
    ]


    btn.addEventListener("click", () => {
        let x = Math.floor(Math.random() * team.length)
        // let x = 1

        team_logo.src = team[x].team
        // cricket.style.backgroundColor = team[x].prime


    })
}

// part - 2

{
    let status = document.querySelector(".req-status")
    let btn = document.querySelector(".req-btn")

    let flag = 0

    btn.addEventListener("click", () => {
        if (flag) {

            status.textContent = "Stranger"
            status.style.color = "rgb(245, 87, 87)"

            btn.textContent = "Add Friend"
            btn.style.background = "yellowgreen"

            flag = 0
        }
        else {

            status.textContent = "Adding ...."
            status.style.color = "yellow"

            btn.textContent = "Request Sending ...."
            btn.style.background = "yellow"
            setTimeout(() => {

                status.textContent = "Friend"
                status.style.color = "#79af0b"

                btn.textContent = "Remove Friend "
                btn.style.background = "rgb(245, 87, 87)"

                flag = 1
            }, 1000)

        }

    })
}

// part - 3

{
    let btn = document.querySelector(".teleport")
    let img = document.querySelector(".p-3 img")

    btn.addEventListener("click", () => {
        let w = Math.floor(Math.random() * 90)
        let h = Math.floor(Math.random() * 90)

        img.style.top = h + "%"
        img.style.left = w + "%"
    })
}
