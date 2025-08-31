{
    var like = document.querySelector(".like")
    var img = document.querySelector(".status-pic")

    img.addEventListener("dblclick", () => {
        like.style.transform = " translate(-50% , -50%) scale(1.5)"

        setTimeout(() => {
            like.style.transform = " translate(-50% , -50%) scale(0)"
        }, 1000)
    })
}


{
    var main = document.querySelector(".sec-2")
    var cur = document.querySelector(".cursor")

    main.addEventListener("mousemove", (data) => {
        cur.style.top = data.clientY + "px"
        cur.style.left = data.clientX + "px"
        // console.log(data);

    })
}


{
    var ele = document.querySelectorAll(".elem")


    ele.forEach((elem) => {
        var img = elem.childNodes[3]


        elem.addEventListener("mousemove", (data) => {

            let rect = elem.getBoundingClientRect()
            const xPos = data.clientX - rect.left;
            const yPos = data.clientY - rect.top;

            // Move the image according to the mouse position
            img.style.transform = `translate(-50%, -50%) translate(${xPos}px, ${yPos}px)`;
        })

        elem.addEventListener("mouseenter", () => {
            img.style.opacity = 1
        })

        elem.addEventListener("mouseleave", () => {
            img.style.opacity = 0
        })

    })
}

{
    let arr = [
        {
            dp: "https://images.unsplash.com/photo-1755467020939-4c3e196545bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1603470642373-3aac9e33b9f3?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            dp: "https://images.unsplash.com/photo-1752440284390-26d0527bbb9f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1710324064176-b35d93e4bde3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            dp: "https://plus.unsplash.com/premium_photo-1667857391859-de8d295ca2db?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1755134148354-bddce4c93ad8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            dp: "https://plus.unsplash.com/premium_photo-1754601437019-34e9a6672827?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://plus.unsplash.com/premium_photo-1745119735095-c82c58b9020a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            dp: "https://plus.unsplash.com/premium_photo-1756165389301-037ffbdd64ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://plus.unsplash.com/premium_photo-1713163890188-6807aa2641de?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    
    let status = document.querySelector(".story_collection")
    let main_status = document.querySelector("#main_story")
    let clutter = ""

    arr.forEach((x, ind) => {
        clutter += `
        <div class="story">
            <img id="${ind}" src="${x.dp}" alt="">
        </div>`

    })

    status.innerHTML = clutter

    status.addEventListener("click", (ele) => {
        let x = arr[ele.target.id].story

        main_status.style.display = "block"
        main_status.querySelector("img").src = x

        setTimeout(() => {
            main_status.style.display = "none"
        }, 3000)
    })




}
