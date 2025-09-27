let main_manu = document.querySelector(".all_tasks_viwer")
let all_task_viwer = document.querySelectorAll(".tasks_viwer")
let all_tasks = document.querySelectorAll(".task")
let all_back_btn = document.querySelectorAll(".back")
let time_loop = null

// Main Manu
function task_view() {
    all_task_viwer.forEach((elem) => {
        elem.addEventListener("click", (x) => {
            x.preventDefault();

            // First, hide all the task sections
            all_tasks.forEach(task => task.style.display = "none");

            // Then, show only the one that was clicked
            const index = parseInt(elem.id, 10);
            all_tasks[index].style.display = "flex";

            main_manu.style.display = "none";
        });
    });

    all_back_btn.forEach((btn, idx) => {
        btn.addEventListener("click", (x) => {
            x.preventDefault();
            all_tasks[idx].style.display = "none";
            main_manu.style.display = "flex";
        });
    });
}

task_view();

// TO-DO

{
    let task_view_main = document.querySelector(".view_task_section")
    let inp_title = document.querySelector(".input_title")
    let inp_dec = document.querySelector(".input_description")
    let task_imp = document.querySelector(".task_imp")
    let add_btn = document.querySelector(".add_task")

    function todo_list_view() {

        let clutter = ""
        let x = JSON.parse(localStorage.getItem("tasks")) || []

        // console.log(x);

        if (x.length > 0) {
            document.querySelector(".view_section").style.display = "block"
        } else {
            document.querySelector(".view_section").style.display = "none"
        }

        x.forEach((task) => {

            clutter += `
        <div class="task-reader" id="${task.id}">
            <span>
                <h5>${task.task_title}</h5>
                <p>${task.task_detailes}</p>
            </span>
            ${(task.imp)
                    ? `<span class="imp"> IMP </span>`
                    : ""}
            <button>Mark as Completed</button>
        </div > `
        })

        task_view_main.innerHTML = clutter
        // console.log(clutter);
        remove_task()
    }

    add_btn.addEventListener("click", add_task)
    inp_title.addEventListener("keydown", (x) => {
        if (x.key === "Enter") {
            add_task()
            // console.log("clicked");

        }
    })
    inp_dec.addEventListener("keydown", (x) => {
        if (x.key === "Enter") {
            add_task()
            // console.log("clicked");

        }
    })

    function add_task() {

        // console.log("clicked");

        let title = inp_title.value
        let dec = inp_dec.value
        let imp = task_imp.checked

        // console.log(title);
        // console.log(dec);
        // console.log(imp);

        let tasks = JSON.parse(localStorage.getItem("tasks")) || []


        let task = {
            id: new Date().toString(),
            task_title: title,
            task_detailes: dec,
            imp: imp
        }


        tasks.push(task)

        localStorage.setItem("tasks", JSON.stringify(tasks))

        inp_title.value = ""
        inp_dec.value = ""
        task_imp.checked = false

        todo_list_view()
    }

    function remove_task() {
        let all_task_displayed = document.querySelectorAll(".task-reader")
        let all_task_dt = JSON.parse(localStorage.getItem("tasks")) || []

        all_task_displayed.forEach((task) => {
            let id = task.id

            task.querySelector("button").addEventListener("click", () => {

                let x = all_task_dt.filter((tsk) => (tsk.id !== id))
                localStorage.setItem("tasks", JSON.stringify(x))
                todo_list_view()

            })
        })
    }


    todo_list_view()

}

// theme
{
    const themeButtons = document.querySelectorAll(".theme_type");
    const darkToggle = document.querySelector(".light_dark");
    const root = document.documentElement;

    let currentTheme = "default";
    let isDark = false;

    // Themes that support dark mode
    const supportsDark = ["default", "red", "blue"];

    function setTheme(theme, darkMode = false) {
        root.className = ""; // Remove all classes

        if (darkMode && supportsDark.includes(theme)) {
            root.classList.add(`dark_${theme}`);
            isDark = true;
        } else {
            root.classList.add(theme);
            isDark = false;
        }

        currentTheme = theme;

        // Handle dark toggle UI
        if (!supportsDark.includes(theme)) {
            darkToggle.classList.add("disabled");
        } else {
            darkToggle.classList.remove("disabled");
        }
    }

    // Theme button click
    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.dataset.theme;
            setTheme(theme, false); // Always go to light mode on click
        });
    });

    // Dark mode toggle
    darkToggle.addEventListener("click", () => {
        if (supportsDark.includes(currentTheme)) {
            setTheme(currentTheme, !isDark);
        }
    });

}

// Schedule Planner
{
    let hour_viwer = document.querySelector(".planner .main")

    function plan_viewr() {
        let dally_plan = JSON.parse(localStorage.getItem("Daily_plan")) || {}
        let arr = Array.from({ length: 24 }, (ele, idx) => `${0 + idx}:00 - ${1 + idx}:00`)

        let clutter = ""
        arr.forEach((ele, idx) => {
            clutter +=
                `<div class="hour_planner">
                <p>${ele}</p>
                <input id="${idx}" type="text" placeholder="...." value="${dally_plan[idx] || ""}">
            </div>`
        })

        hour_viwer.innerHTML = clutter
        plan_add_updater()
    }

    function plan_add_updater() {
        let all_plan = document.querySelectorAll(".hour_planner")
        let dally_plan = JSON.parse(localStorage.getItem("Daily_plan")) || {}
        all_plan.forEach((x) => {
            let input_dt = x.querySelector("input")


            input_dt.addEventListener("input", () => {
                let value = input_dt.value
                dally_plan[input_dt.id] = value
                localStorage.setItem("Daily_plan", JSON.stringify(dally_plan))
            })
        })
    }

    plan_viewr()
    plan_add_updater()

}

// Quete
{
    let all_task = document.querySelector(".all_task")
    let motivation = all_task.querySelector(".motivation")
    let quete = motivation.querySelector(".quete")
    let writer = motivation.querySelector(".writer");

    let fatched_quete = fetch("https://dummyjson.com/quotes/random")
        .then((rand_quute) => rand_quute.json())
        .then((x) => {
            quete.textContent = x.quote;
            writer.textContent = `--- ${x.author}`;
        }).catch((x) => {
            console.error(x);
            quete.textContent = "NO Quete Found";
            writer.style.display = "none"
        })

}

// Time 
{
    let all_task = document.querySelector(".all_task")
    let h2 = all_task.querySelector(".timer .main h2")
    let h3 = all_task.querySelector(".timer .main h3")

    let strat_btn = all_task.querySelector(".btn .start_btn");
    let stop_btn = all_task.querySelector(".btn .stop_btn");
    let reset_btn = all_task.querySelector(".btn .reset_btn");
    let work_mode = true

    let totel_sec = 25 * 60

    function time_update() {
        let min = (Math.floor(totel_sec / 60))
        let sec = (Math.floor(totel_sec % 60))

        h2.textContent = `${String(min).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`
    }

    strat_btn.addEventListener("click", () => {
        clearInterval(time_loop)
        time_loop = setInterval(() => {
            totel_sec--
            time_update()

            if (totel_sec <= 0) {
                clearInterval(time_loop)
                if (work_mode) {
                    work_mode = false
                    totel_sec = 5 * 60
                    time_update()
                    h3.innerHTML = "Break Mode"
                    h3.style.background = "red"
                }
                else {
                    work_mode = true
                    totel_sec = 25 * 60
                    time_update()
                    h3.innerHTML = "Work Mode"
                    h3.style.background = "#fffb00"
                }
            }

        }, 1000)
    })

    stop_btn.addEventListener("click", () => {
        totel_sec = 25 * 60
        clearInterval(time_loop)
    })

    reset_btn.addEventListener("click", () => {
        clearInterval(time_loop)
        totel_sec = 25 * 60
        time_update()
    })


}

// Goal

{
    let all_task = document.querySelector(".all_task")
    let input = all_task.querySelector(".goal_io .io")
    let io_btn = all_task.querySelector(".goal_io button")

    let goal_op_secion = all_task.querySelector(".goal_op")

    io_btn.addEventListener("click", goal_add)
    input.addEventListener("keydown", (x) => {
        if (x.key === "Enter") {
            goal_add()
        }
    })

    function goal_add() {
        let arr = JSON.parse(localStorage.getItem("goals")) || []

        let io = input.value
        if (!io) return
        arr.push(io)
        input.value = ""


        localStorage.setItem("goals", JSON.stringify(arr))
        goal_view()
    }

    function goal_view() {
        let arr = JSON.parse(localStorage.getItem("goals")) || []
        let clutter = ""

        arr.forEach((x, idx) => {
            clutter += `<div class="goal">
                                <h3 >${x}</h3>
                                <span id="${idx}">Completed</span>
                            </div>`


        })
        goal_op_secion.innerHTML = clutter
        goal_remove()
    }

    function goal_remove() {
        let all_goal_view = goal_op_secion.querySelectorAll(".goal")
        let arr = JSON.parse(localStorage.getItem("goals")) || []

        all_goal_view.forEach((x, idx) => {
            // console.log(x);
            x.querySelector("span").addEventListener("click", () => {

                let goal_txt = x.querySelector("h3").textContent

                // arr = arr.filter((goal) => goal !== goal_txt)
                arr.splice(idx, 1)


                localStorage.setItem("goals", JSON.stringify(arr))

                goal_view()
            })
        })

    }

    goal_view()


}

// weather
{
    const weather_apikey = "339a6f067fab45899c2181434252609"
    let city = "Surat"
    let mein_weather_section = document.querySelector(".top_section")
    let top_left = mein_weather_section.querySelector(".left")
    let top_right = mein_weather_section.querySelector(".right")

    let date_left = top_left.querySelector("h1")
    let location = top_left.querySelector("h4")

    let temp_right = top_right.querySelector(".celcies")
    let weather_condition = top_right.querySelector(".condition")
    let precipitation = top_right.querySelector(".precipitation")
    let wind = top_right.querySelector(".wind")
    let humidity = top_right.querySelector(".humidity")


    let data = null

    async function waether_API_cell() {
        try {
            let live_weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weather_apikey}&q=${city}`)
            data = await live_weather.json()

            // console.log(data.current.temp_c);
            console.log(data);

            location.innerHTML = `${city} (${data.location.region})`
            temp_right.innerHTML = `${Math.floor(data.current.temp_c)} °C`
            weather_condition.textContent = data.current.condition.text
            precipitation.innerHTML = `Precipitation: ${data.current.precip_mm || 0} mm`
            humidity.textContent = `Humidity: ${data.current.humidity} %`
            wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`
        }
        catch (error) {
            console.error("Failed to fetch weather:", error);
        }
    }
    waether_API_cell()

    let date = null

    function date_time() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let date = new Date();

        let dayName = days[date.getDay()];

        let hours24 = date.getHours();
        let am_pm = (hours24 >= 12) ? "PM" : "AM";

        if (hours24 >= 6 && hours24 < 12) {
            mein_weather_section.querySelector("header").style.background = 'url("./Public/+Background/Sky-1.jpeg")';
        } else if (hours24 >= 12 && hours24 < 17) {
            mein_weather_section.querySelector("header").style.background = 'url("./Public/+Background/Sky-2.png")';
        } else {
            mein_weather_section.querySelector("header").style.background = 'url("./Public/+Background/Sky-3.png")';
            mein_weather_section.querySelector("header").style.color = "white"
        }


            // Convert to 12-hour format
            let hours12 = hours24 % 12;
        hours12 = hours12 ? hours12 : 12; // 0 => 12

        // Pad minutes and seconds
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let seconds = String(date.getSeconds()).padStart(2, '0');

        date_left.innerHTML = `${dayName}, ${hours12} : ${minutes} : ${seconds} ${am_pm}`;

    }
    setInterval(() => {
        date_time()
    }, 1000);
}
