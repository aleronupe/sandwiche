const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
  // Implemente a lógica para obter dados reais aqui
  const data = { clicks: [50, 30, 60, 45, 75, 90, 40] };

  const dados = [
    {
      date: "2023-12-01",
      pageViews: 30,
      clickedLinks: {
        "link-01": 20,
        "link-02": 5,
        "link-03": 5
      }
    }, {
      date: "2023-12-02",
      pageViews: 20,
      clickedLinks: {
        "link-01": 10,
        "link-02": 3,
        "link-03": 7
      }
    }
  ]

  res.json(dados);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
