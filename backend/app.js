import express from 'express';
import dotenv from "dotenv";
import db from "./src/db/db.js";
import playerRoutes from "./src/routes/playerRoutes.js";
import matchRoutes from "./src/routes/matchRoutes.js";
import { errorHandler } from './src/middleware/errorHandler.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Test connection to the database
const database =  db.getInstance();
await db.testConnection();

// Initialisation de l'application express
const app = express()
app.use(cors());
const port = 3000
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Qui bosse le moins',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));




// Routes
app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use(bodyParser.json());

app.use(errorHandler);


// Lancement du serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})




