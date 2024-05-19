const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}