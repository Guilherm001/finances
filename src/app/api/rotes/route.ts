import express from "express";

const router = express.Router();

router.post("/cadastro", (req, res) => {
  const usuario = req.body;
  res.status(201).json({ message: "Usuário criado com sucesso", usuario });
});

export default router;