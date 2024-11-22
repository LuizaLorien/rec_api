import express from "express";
import { registrarProdutos, getProdutos, getProdutosId } from "../controllers/produtosController.js";

const router = express.Router();

router.post("/", registrarProdutos);
router.get("/", getProdutos);
router.get("/:id", getProdutosId)

export default router;
