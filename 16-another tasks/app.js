// Новый объект
const newTask = {
    tasks: [{ 
        id: 1, 
        name: "тест", 
        description: "описание",
        order: 0
    }]
};

// Объект из предыдущего задания
const ToDoList = {
    tasks: [
        { 
            title: "Помыть посуду", 
            id: 1, 
            priority: 5
        }
    ],
    addTask: function (title, priority) {
        const id = Math.max(...this.tasks.map(task => task.id)) + 1;
        this.tasks.push({ title, priority, id });
    },
    removeTask: function (id) {
        const index = this.tasks.findIndex(task => task.id === id);

        if (index !== -1) {
            this.tasks.splice(index, 1);
        } else {
            console.log("Такой таски не существует");
        }
    },
    updateTask: function (id, newTitle, newPriority) {
        const task = this.tasks.find(i => i.id === id);

        if (task) {
            task.title = newTitle;
            task.priority = newPriority;
        } else {
            console.log("Такой таски не существует");
        }
    },
    sort: function () {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
};

// -------------------------------------
// Применяем методы к newTask через call
// -------------------------------------

// 1. Добавляем задачу
ToDoList.addTask.call(newTask, "Выкинуть мусор", 2);
console.log(newTask.tasks);

// 2. Удаляем задачу с id = 2
ToDoList.removeTask.call(newTask, 2);
console.log(newTask.tasks);

// 3. Снова добавляем задачу
ToDoList.addTask.call(newTask, "Выкинуть мусор", 2);
console.log(newTask.tasks);

// 4. Обновляем задачу
ToDoList.updateTask.call(newTask, 2, "Постирать", 3);
console.log(newTask.tasks);

// 5. Сортируем по priority
ToDoList.sort.call(newTask);
console.log(newTask.tasks);
