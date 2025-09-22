// https://api.github.com/users/sandip3

let notification = document.querySelector(".notification")

let input_txt = document.querySelector(".text")
let input_btn = document.querySelector(".input_btn")

let git_view = document.querySelector(".github_data_get")
let img = document.querySelector("img")
let nickname = document.querySelector(".git_nickname")
let g_name = document.querySelector(".git_name")
let follower = document.querySelector(".follower")
let following = document.querySelector(".following")
let total_repo = document.querySelector(".Tot_repo")
let top_repo_section = document.querySelector(".top_repo_section")

function remove_scaleton() {
    img.classList.remove("skeleton")
    nickname.classList.remove("skeleton")
    g_name.classList.remove("skeleton")
    follower.classList.remove("skeleton")
    following.classList.remove("skeleton")
    total_repo.classList.remove("skeleton")
    top_repo_section.classList.remove("skeleton")
}

function add_scaleton() {
    img.classList.add("skeleton")
    nickname.classList.add("skeleton")
    g_name.classList.add("skeleton")
    follower.classList.add("skeleton")
    following.classList.add("skeleton")
    total_repo.classList.add("skeleton")
    // top_repo_section.classList.add("skeleton")
}

input_btn.addEventListener("click", (x) => {
    x.preventDefault()
    git_data_fetching()

})

input_txt.addEventListener("keydown", (x) => {
    if (x.key === "Enter") {
        x.preventDefault()
        git_data_fetching()
    }
})



function git_data_fetching() {

    let input = input_txt.value

    let git_fetch = fetch(`https://api.github.com/users/${input}`)
        .then(data => {
            if (!data.ok) {
                throw new Error("User Not Found")
            }
            return data.json()
        })

        .then((x) => {
            console.log(x);

            git_view.style.display = "grid"

            img.src = x.avatar_url
            g_name.textContent = `Name : ${x.login}`
            nickname.textContent = `Username : ${x.name}`
            follower.textContent = `Follower : ${x.followers}`
            following.textContent = `Following : ${x.following}`
            total_repo.textContent = `Total Repo : ${x.public_repos}`

            notification.innerHTML = "User Found !!"
            notification.style.display = 'block'
            notification.classList.add("notification_success")

            setTimeout(() => {
                notification.style.display = 'none'
                notification.classList.remove("notification_success")
                console.log("3 Sec Finish");
            }, 5000)

            remove_scaleton()
        })
        .catch((x) => {

            notification.innerHTML = x
            notification.style.display = 'block'
            notification.classList.add("notification_error")

            setTimeout(() => {
                notification.style.display = 'none'
                notification.classList.remove("notification_error")
                console.log("3 Sec Finish");
            }, 5000)

            img.src = ``
            document.querySelectorAll("h3").forEach((x) => {
                x.textContent = ""
            })

            add_scaleton()
        })
    input_txt.value = ""

}
