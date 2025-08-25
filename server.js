const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🍹 Servidor rodando no Railway!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
