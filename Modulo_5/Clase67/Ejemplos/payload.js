const jwt = require('jsonwebtoken')

// Clave secreta para firmar el token
const secretkey = "mi_clave_super_secreta"

// definir el payload
const payload = {
    userId: 123,
    role: "admin",
    name: "Berni Bauque",
    iat: Math.floor(Date.now() / 1000), // fecha actual en minutos
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // expiracion en una hora
}

//creamos el JWT
const token = jwt.sign(payload, secretkey, { algorithm: 'HS256' })
console.log("JWT generado: ", token);

// decodificamos y verificamos
try {
    const decod = jwt.verify(token, secretkey)
    console.log("Payload decodificado: ", decod);
} catch (error) {
    console.log("Token invalido o expirado", error.message);
}
