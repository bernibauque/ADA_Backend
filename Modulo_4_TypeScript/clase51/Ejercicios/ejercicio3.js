function processEmployee(employees, callback) {
    employees.forEach((employee, index) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(() => {
            const id = index + 1;
            callback(`Empleado: ${employee}, ID: ${id}, registrado en ${delay / 1000} segundos.`);
        }, delay);
    });
}

const employees = ["Juan", "Lucía", "Carla", "Pablo"];

processEmployee(employees, (message) => {
    console.log(message);
});
