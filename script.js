document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value;

    if (taskValue.trim() === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="remove-btn">Remover</button>
    `;

    li.querySelector('span').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
    });

    li.querySelector('.remove-btn').addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
}
