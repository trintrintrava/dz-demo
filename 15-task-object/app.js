ToDoList = {
    tasks: [
        { 
            title: "Помыть посуду", 
            id: 1, 
            priority: 5
        }
    ],
    addTask: function (title, priority) {
        let id = Math.max(...this.tasks.map(task => task.id)) + 1;
        this.tasks.push({title, priority, id});
    },
    removeTask: function (id) {
        let index = this.tasks.findIndex(task => task.id === id);

        if (index !== -1) {
            this.tasks.splice(index);
        } else {
            console.log("Такой таски не существует");
        }
    },
    updateTask: function(id, newTitle, newPriority){
        let task = this.tasks.find(i => i.id === id);

        if (task) {
            task.title = newTitle;
            task.priority = newPriority;
        } else {
            console.log("Такой таски не существует")
        }
    },
    sort: function(){
        this.tasks.sort((a,b) => a.priority - b.priority);
    }
}

ToDoList.addTask("Выкинуть мусор", 2)
console.log(ToDoList.tasks);
ToDoList.removeTask(2);
console.log(ToDoList.tasks);
ToDoList.addTask("Выкинуть мусор", 2);
console.log(ToDoList.tasks);
ToDoList.updateTask(2, "Постирать", 3);
console.log(ToDoList.tasks);
ToDoList.sort();
console.log(ToDoList.tasks);