// Definimos un middleware llamado "authMiddleware" para verificar la autenticación en las solicitudes.
// Los middlewares son funciones que procesan solicitudes antes de que lleguen al controlador final.
const authMiddleware = (req, res, next) => {
  // Extraemos el token de autorización del encabezado "Authorization" de la solicitud.
  // Este encabezado normalmente contiene el token enviado por el cliente.
  const token = req.headers.authorization;

  // Verificamos si el token no está presente.
  // Si no hay un token, respondemos con un estado HTTP 403 (Prohibido) y un mensaje de "No autorizado".
  if (!token) return res.status(403).send("No autorizado");

  // Si el token está presente, llamamos a "next()" para permitir que la solicitud continúe.
  // Esto indica que el middleware ha terminado su trabajo y el siguiente middleware o controlador debe ejecutarse.
  next();
};
