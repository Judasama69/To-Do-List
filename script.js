import { inject } from "@vercel/analytics"

document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('done');
        });

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(taskTextSpan);
        li.appendChild(removeBtn);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});