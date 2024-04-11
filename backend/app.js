import express from 'express';
import dotenv from "dotenv";
import db from "./src/db/db.js";
import playerRoutes from "./src/routes/playerRoutes.js";

// Load environment variables
dotenv.config();

// Test connection to the database
const database =  db.getInstance();
await db.testConnection();

// Initialisation de l'application express
const app = express()
const port = 3000
app.use(express.json());

// Routes
app.use('/players', playerRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Lancement du serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




