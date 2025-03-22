const generalLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 100, // Máximo 100 requests por IP
    message: "Demasiadas solicitudes, inténtalo más tarde.",
});

app.use(generalLimiter); // Aplica la restricción a todas las rutas
