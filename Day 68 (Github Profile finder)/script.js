// Select DOM elements once
const notification = document.querySelector(".notification");
const inputTxt = document.querySelector(".text");
const inputBtn = document.querySelector(".input_btn");

const gitView = document.querySelector(".github_data_get");
const img = gitView.querySelector("img");
const nickname = gitView.querySelector(".git_nickname");
const gName = gitView.querySelector(".git_name");
const totalRepo = gitView.querySelector(".Tot_repo span");
const follower = gitView.querySelector(".follower span");
const following = gitView.querySelector(".following span");
const locationEl = gitView.querySelector(".location span");
const company = gitView.querySelector(".company span");
const blog = gitView.querySelector(".blog span");
const bio = gitView.querySelector(".Bio");

const topRepoSection = gitView.querySelector(".top_repo_section");
const repoListContainer = document.createElement("div");
repoListContainer.classList.add("repo_list");
topRepoSection.appendChild(repoListContainer);

const profileSection = gitView.querySelector(".profile_section");
const basicData = gitView.querySelector(".Basic_data");

// Hide on initial load
hideProfile();

inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetchGitHubData();
});

inputTxt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        fetchGitHubData();
    }
});

function fetchGitHubData() {
    const username = inputTxt.value.trim();
    if (!username) return showNotification("Please enter a username", "error");

    showSkeleton();
    hideProfile();

    // Fetch user data
    fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
            if (!res.ok) throw new Error("User Not Found");
            return res.json();
        })
        .then((data) => {
            displayUserData(data);
            showNotification("User Found!", "success");
            fetchUserRepos(username);
        })
        .catch((err) => {
            hideProfile();
            showNotification(err.message, "error");
            clearRepos();
            hideSkeleton();
        })
        .finally(() => {
            inputTxt.value = "";
        });
}

function fetchUserRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
        .then((res) => {
            if (!res.ok) throw new Error("Can't Get Repository Data");
            return res.json();
        })
        .then((repos) => {
            displayRepos(repos);
        })
        .catch((err) => {
            showNotification(err.message, "error");
            clearRepos();
        })
        .finally(() => {
            hideSkeleton();
        });
}

function displayUserData(user) {
    img.src = user.avatar_url;
    img.style.display = "block";

    nickname.textContent = user.name || "-";
    gName.textContent = `@${user.login}`;
    bio.textContent = user.bio || "-";
    follower.textContent = user.followers;
    following.textContent = user.following;
    totalRepo.textContent = user.public_repos;
    locationEl.textContent = user.location || "-";
    company.textContent = user.company || "-";
    blog.textContent = user.blog || "-";

    basicData.style.display = "flex";
    topRepoSection.style.display = "block";
    profileSection.classList.remove("skeleton");
    topRepoSection.classList.remove("skeleton");
    gitView.style.display = "grid";
}

function displayRepos(repos) {
    clearRepos();
    if (!repos.length) {
        repoListContainer.innerHTML = "<p>No repositories found.</p>";
        return;
    }
    const repoHTML = repos
        .map((repo) => `<h3>${repo.name}</h3>`)
        .join("");
    repoListContainer.innerHTML = repoHTML;
}

function clearRepos() {
    repoListContainer.innerHTML = "";
}

function showNotification(message, type) {
    notification.textContent = message;
    notification.style.display = "block";
    notification.classList.remove("notification_error", "notification_success");

    if (type === "error") {
        notification.classList.add("notification_error");
    } else if (type === "success") {
        notification.classList.add("notification_success");
    }

    setTimeout(() => {
        notification.style.display = "none";
        notification.classList.remove("notification_error", "notification_success");
    }, 5000);
}

function showSkeleton() {
    profileSection.classList.add("skeleton");
    topRepoSection.classList.add("skeleton");
}

function hideSkeleton() {
    profileSection.classList.remove("skeleton");
    topRepoSection.classList.remove("skeleton");
}

function hideProfile() {
    img.style.display = "none";
    basicData.style.display = "none";
    topRepoSection.style.display = "none";
    gitView.style.display = "none";
    clearRepos();
}
