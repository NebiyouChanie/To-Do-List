const submitbtn = document.getElementById("submit-btn");
const taskInput = document.getElementById("taskinput");
const tasklist = document.getElementById("lists");
const clearbtn = document.getElementById("clear");
const clearallbtn = document.getElementById("clearall");

submitbtn.addEventListener("click", function () {
    const taskvalue = taskInput.value;

    if (taskvalue) {
        const taskitem = document.createElement('div');
        taskitem.textContent = taskvalue;
        tasklist.appendChild(taskitem);

        const clearitem = document.createElement('button');
        clearitem.textContent = 'X';
        clearitem.setAttribute('class', 'clear-btn');
        taskitem.appendChild(clearitem);

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.setAttribute('class', 'done-btn');
        taskitem.appendChild(doneBtn);

        taskInput.value = '';

        clearitem.addEventListener("click", function () {
            taskitem.remove();
        });

        doneBtn.addEventListener('click', function () {
            doneBtn.remove();
            taskitem.append(" (Completed)");
        });
    }
});

clearbtn.addEventListener("click", function () {
    taskInput.value = '';
});

clearallbtn.addEventListener('click', function () {
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
});
