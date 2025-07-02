import express from "express";
import cors from "cors";
import { db } from "./db.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", (req, res) => {
  // const { name } = req.query;
  const { name } = req.body;

  db.query('INSERT INTO invitado(nombre) VALUES(:param1)', {
    replacements: { param1: name },
    type: db.QueryTypes.INSERT
  })
  res.send("Registro insertadossssssss")
});

{/*app.get("/", (req, res) => {
  db.query('INSERT INTO invitado(nombre) VALUES(:param1)', {
    replacements: { param1: 'Juanita' },
    type: db.QueryTypes.INSERT
  })
  res.send("Registro insertado")
});

app.post("/nicecositas", (req, res) => {
  res.send("ueeeeeeeeeeee!")
});



app.get("/", (req, res) => {

  const { name, age } = req.query;
  res.send("Registro insertado" + name + "-" + age);
})



app.get("/url2/:id", (req, res) => {
  const id = req.params.id;

  res.send("Registro insertado: " + id);
});



app.post("/nicecositas", (req, res) => {
  const { nombre } = req.body;

  res.send("ueeeeeeeeeeee! " + nombre)
});
*/}
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
