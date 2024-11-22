import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const registrarProdutos = (req, res) => {
    const { nome, descricao, preco, estoque } = req.body;

    if (!nome || !descricao || !preco || !estoque) {
        return res
          .status(400)
          .json({ msg: "Preencha todos os campos obrigatórios." });
      }

      const id = uuidv4();

      const sql = "INSERT INTO produtos (produtos_id, nome, descricao, preco, estoque) VALUES (?, ?, ?)";

      conn.query(sql, [id, nome, descricao, preco, estoque], (err, data) =>{
        if (err) {
            console.error(err);
            return res.status(500).json({ msg: "Erro ao cadastrar produto." });
          }
          res.status(201).json({ msg: "Produto cadastado com sucesso!", id });
      })
};

export const getProdutos = (req, res) => {
    const sql = "select * from produtos";

    conn.query(sql, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Erro ao buscar os produtos." });
        }
        res.status(200).json(data);
      });
};

export const getProdutosId = (req, res) => {
    const sql = "select * from produtos";

    

    conn.query(sql, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Erro ao buscar os produtos." });
        }
        res.status(200).json(data);
      });
}