{
    function Task_manager() {
        this.add_task_filed = document.querySelector(".Task_add")
        this.add_task_btn = document.querySelector(".add-task")
        this.task_collection = document.querySelector(".task_collection")
        this.task_update_section = document.querySelector(".update-section")
        this.task_update_txt = this.task_update_section.querySelector("p")
        this.task_update_filed = this.task_update_section.querySelector("input")
        this.Task_update_btn = this.task_update_section.querySelector("button")
    }

    Task_manager.prototype.add_task = function () {
        this.add_task_filed.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                adding_Task(event)
            }
        })
        this.add_task_btn.addEventListener("click", adding_Task)

        function adding_Task(event) {
            let temp_task = this.add_task_filed.textContent
            console.log(temp_task);

        }

    }


    let Task_manager_1 = new Task_manager()
    Task_manager_1.add_task()
}
