import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

import './models/produtosModel.js';


import produtosRouter from './routes/produtosRoute.js';

const app = express();

app.use("/produtos", produtosRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});