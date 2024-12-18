// Definimos un objeto llamado "corsOptions" que contiene las configuraciones específicas para CORS
const corsOptions = {
  // La propiedad "origin" especifica qué dominios tienen permitido realizar solicitudes a este servidor.
  // En este caso, solo el dominio "http://example.com" está permitido.
  origin: "http://example.com",

  // La propiedad "methods" define qué métodos HTTP están permitidos para las solicitudes de los clientes.
  // Aquí se permite únicamente GET, POST y PUT.
  methods: ["GET", "POST", "PUT"],
};

// Aplicamos las configuraciones de CORS al servidor utilizando el middleware "cors".
// La función "app.use()" se utiliza para registrar middlewares globales en la aplicación.
// "cors(corsOptions)" configura el middleware CORS con las opciones definidas en "corsOptions".
app.use(cors(corsOptions));
