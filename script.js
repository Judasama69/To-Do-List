        const addButton = document.getElementById('add-btn');
        const inputField = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');

        addButton.addEventListener('click', () => {
            const task = inputField.value.trim();
            if (task) {
                const listItem = document.createElement('li');
                listItem.textContent = task;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-btn');
                removeButton.addEventListener('click', () => {
                    todoList.removeChild(listItem);
                });

                listItem.appendChild(removeButton);
                todoList.appendChild(listItem);
                inputField.value = '';
            }
        });