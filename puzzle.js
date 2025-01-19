// Snippets de código para poder componer el programa

//Usado?: Yes
const middlewares = require("./middlewares");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'middlewares' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const bodyParser = require("body-parser");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'body-parser' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const session = require("express-session");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'express-session' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const express = require("express");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'express' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const bodyParser = require("body-parser");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'body-parser' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const session = require("express-session");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'express-session' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const dotenv = require("dotenv");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'dotenv' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: yes
const middlewares = require("./middlewares");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'middlewares' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
const routes = require("./routes");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'routes' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
dotenv.config();
//--- Explicación: dotenv cargará automáticamente las variables de entorno definidas en el archivo . env en el objeto process

// -------------------------------------------------------------------------------------

//Usado?: Yes
const app = express();
//--- Explicación: asociar app a la funcion express

// -------------------------------------------------------------------------------------

//Usado?: Yes
const PORT = 4000;
//--- Explicación: definir que el puerto usado sera 4000

// -------------------------------------------------------------------------------------

//Usado?: yes
const dotenv = require("dotenv");
//--- Explicación:Almaceno en una variable lo que hay dentro del archivo 'dotenv' par apoder usarlo.

// -------------------------------------------------------------------------------------

//Usado?: Yes
dotenv.config();
//--- Explicación:dotenv cargará automáticamente las variables de entorno definidas en el archivo . env en el objeto process

// -------------------------------------------------------------------------------------

//Usado?: Yes
middlewares.setupApp(app);
//--- Explicación: solicita la funcion setupApp dentro de middlewares

// -------------------------------------------------------------------------------------

//Usado?:Yes
routes.setup(app);
//--- Explicación: solicita la funcion setup dentro de routes

// -------------------------------------------------------------------------------------

//Usado?: Yes
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || "";

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect("/?error=1");
  }
};
//--- Explicación: middleware => compara la palabra entrada con la palabra secreta

// -------------------------------------------------------------------------------------

//Usado?:Yes
const setup = (app) => {
  app.get("/", (req, res) => {
    const mensajeError = req.query.error
      ? req.query.error === "1"
        ? "Palabra incorrecta, inténtalo de nuevo."
        : "No estás logado."
      : "";
    if (req.session.palabraSecreta) {
      return res.redirect("/profile");
    }
    //Aquí va código dentro
  });
};
//--- Explicación: mensaje de error en caso de palabra incorrecta

// -------------------------------------------------------------------------------------

//Usado?: yes
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: html con el mensaje de error, y solicitud de palabra secreta

// -------------------------------------------------------------------------------------
//Usado?: Yes

const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    session({
      secret: "secretoSuperSecreto",
      resave: false,
      saveUninitialized: true,
    })
  );
};
//--- Explicación: encapsula los datos de la sesion

//Usado?: Yes
app.post("/profile", middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: ruta final si la palabra es correcta

// -------------------------------------------------------------------------------------

//Usado?:Yes
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: encapsulacion de los datos de la pagina web

// -------------------------------------------------------------------------------------

//Usado?:Yes
app.use(
  session({
    secret: process.env.PALABRA_SECRETA || "secretoSuperSecreto",
    resave: false,
    saveUninitialized: true,
  })
);

//--- Explicación: datos de la sesion

// -------------------------------------------------------------------------------------

//Usado?: Yes
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: servidor escuchando con information logeada

// -------------------------------------------------------------------------------------

//Usado?: Yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect("/?error=2");
  }
};
//--- Explicación:middleware para verificar la palabra clave

// -------------------------------------------------------------------------------------

//Usado?:yes
app.get("/profile", middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: ruta hacia profile si la palabra es correcta

// -------------------------------------------------------------------------------------

//Usado?:Yes
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
    }
    res.redirect("/");
  });
});
//--- Explicación: ruta hacia logout si la palabra es incorrecta

// -------------------------------------------------------------------------------------

//Usado?: Yes
module.exports = {
  setup,
};
//--- Explicación:modulo export de setup

// -------------------------------------------------------------------------------------

//Usado?: Yes
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: modulo export por las funciones dentro

// -------------------------------------------------------------------------------------
