const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: process.env.LIMIT_SECONDS * 1000, // 10 segundos
  max: process.env.LIMIT_MAX_REQUESTS, // 10 peticiones
  message: {
    status: 429,
    message: "Demaciadas peticiones, espere antes de volver a intentar",
  },
  standardHeaders: true, // Devuelve información de límites en los headers `RateLimit-*`
  legacyHeaders: false, // Desactiva los headers `X-RateLimit-*` (obsoletos)
});

module.exports = apiLimiter;
