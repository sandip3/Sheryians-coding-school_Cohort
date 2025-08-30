// ------------------ Task 1 ------------------
{
    let h1 = document.getElementById("title");
    h1.textContent = "Hello Who are you ?";
}

// ------------------ Task 2 ------------------
{
    let btn = document.querySelector("#btn-style");
    btn.style.backgroundColor = "rgb(122, 235, 70)";
}

// ------------------ Task 3 ------------------
{
    let p = document.querySelectorAll("section:nth-of-type(3) p");
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "blue";
    }
}

// ------------------ Task 4 ------------------
{
    let p = document.querySelector("#change-text");
    let btn = document.querySelector("#btn-change");

    btn.addEventListener("click", () => {
        p.textContent = "Text Changed!";
    });
}

// ------------------ Task 5 ------------------
{
    let btn = document.querySelector("#btn-toggle");
    let div = document.querySelector(".main");
    let flag = 0;

    btn.addEventListener("click", () => {
        if (flag === 0) {
            div.style.display = "block";
            btn.innerHTML = "Hide";
            btn.style.backgroundColor = "yellow";
            flag = 1;
        } else {
            div.style.display = "none";
            btn.innerHTML = "Show";
            btn.style.backgroundColor = "rgb(70, 235, 70)";
            flag = 0;
        }
    });
}

// ------------------ Task 6 ------------------
{
    let add_btn = document.querySelector(".Add-btn");
    let remove_btn = document.querySelector(".Remove-btn");
    let ul = document.querySelector("ul");
    let note = document.querySelector(".Note");
    let x = 1;

    add_btn.addEventListener("click", () => {
        if (x < 10) {
            note.style.display = "none";
            ul.innerHTML += `<li>item ${x}</li>`;
            x++;
        } else {
            note.style.display = "block";
            note.textContent = "Item Limit Reached ";
            note.style.backgroundColor = "rgb(166, 231, 109)";
        }
    });

    remove_btn.addEventListener("click", () => {
        let li = document.querySelectorAll("li");
        if (li.length > 0) {
            note.style.display = "none";
            li[li.length - 1].remove();
            x--;
        } else {
            note.style.display = "block";
            note.textContent = "NO Item to remove";
            note.style.backgroundColor = "rgb(231, 109, 109)";
        }
    });
}

// ------------------ Task 7 ------------------
{
    let img = document.querySelector("#switch-img");
    let btn = document.querySelector("#img-btn");
    let flag = 0;

    img.src = "https://images.unsplash.com/photo-1755845711249-32cfcdcabfeb?q=80&w=2070";

    btn.addEventListener("click", () => {
        if (flag) {
            flag = 0;
            img.src = "https://images.unsplash.com/photo-1755845711249-32cfcdcabfeb?q=80&w=2070";
        } else {
            flag = 1;
            img.src = "https://images.unsplash.com/photo-1755352728634-c0fbda74bb76?q=80&w=1074";
        }
    });
}

// ------------------ Task 8 ------------------
{
    let h2 = document.querySelectorAll("section:nth-of-type(8) h2");
    let btn = document.querySelector("#h2-btn");
    let x = 0;

    btn.addEventListener("click", () => {
        if (x < h2.length) {
            h2[x].style.fontSize = "1.8rem";
            x++;
        }
    });
}

// ------------------ Task 9 ------------------
{
    let add_btn = document.querySelector(".add");
    let remove_btn = document.querySelector(".remove");
    let sp = document.querySelector("span");
    let x = 0;

    sp.textContent = `${x}`;

    add_btn.addEventListener("click", () => {
        x++;
        sp.textContent = `${x}`;
    });

    remove_btn.addEventListener("click", () => {
        x--;
        sp.textContent = `${x}`;
    });
}

// ------------------ Task 10 ------------------
{
    let x = 0;
    document.querySelector("#task-10").addEventListener("click", () => {
        if (x) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            x = 0;
        } else {
            document.body.style.backgroundColor = "black";
            // document.body.style.color = "white";
            x = 1;
        }
    });
}

// ------------------ Project: Bulb ------------------
{
    let btn = document.querySelector("#bulb-btn");
    let bulb = document.querySelector(".bulb");
    let x = 0;

    btn.addEventListener("click", () => {
        if (x) {
            bulb.style.backgroundColor = "rgb(249, 249, 67)";
            x = 0;
        } else {
            bulb.style.backgroundColor = "rgb(137, 137, 113)";
            x = 1;
        }
    });
}
