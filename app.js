const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const middlewares = require("./middlewares");
const routes = require("./routes");

dotenv.config();

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la sesión con el secreto desde el archivo .env
app.use(
  session({
    secret: process.env.PALABRA_SECRETA || "secretoSuperSegreto", // Usa el valor de SESSION_SECRET del archivo .env, o un valor predeterminado
    resave: false,
    saveUninitialized: true,
  })
);

middlewares.setup(app);

routes.setup(app);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
