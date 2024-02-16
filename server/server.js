const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
  // Implemente a lógica para obter dados reais aqui
  const data = { clicks: [50, 30, 60, 45, 75, 90, 40] };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
