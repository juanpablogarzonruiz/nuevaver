const express = require('express');
const cors = require("cors");

const app = express();
const estudiantesroutes = require("./backend/routes/estudiantesroutes.js");
const profesoresroutes = require("./backend/routes/profesoresroutes.js");
const cursosroutes = require("./backend/routes/cursosroutes.js");

app.use(express.json());
app.use(cors());
app.get ("/", (req,res) => {
    res.send ("Hola mundoooo");
})

app.use ("/estudiantes",estudiantesroutes);
app.use ("/profesores",profesoresroutes);
app.use ("/cursos",cursosroutes);

app.listen (6500,() =>{
    console.log("servidor activo");
});
