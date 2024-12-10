// Simulamos una base de datos con un array en memoria
let tasks = [
    { id: 1, title: "Aprender Node.js", completed: false },
    { id: 2, title: "Estudiar MVC", completed: true },
];

// Función para obtener todas las tareas
const getAllTasks = () => tasks;

// Función para agregar una nueva tarea al array
const addTask = (task) => {
    tasks.push(task); // Agrega la nueva tarea al final del array
};

// Función para actualizar una tarea existente
const updateTask = (id, updatedTask) => {
    const index = tasks.findIndex((task) => task.id === id); // Busca el índice de la tarea con el ID dado
    if (index !== -1) tasks[index] = { ...tasks[index], ...updatedTask }; // Actualiza la tarea si existe
};

// Función para eliminar una tarea por su ID
const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id); // Filtra y elimina la tarea con el ID dado
};

// Exportamos las funciones para que puedan ser usadas en otras partes de la app
module.exports = { getAllTasks, addTask, updateTask, deleteTask };




