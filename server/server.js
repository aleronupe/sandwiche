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
      clickedLinks: [
        { link: "link-01", clicks: 20 },
        { link: "link-02", clicks: 5 },
        { link: "link-03", clicks: 6 }
      ]
    },
    {
      date: "2023-12-02",
      pageViews: 20,
      clickedLinks: [
        { link: "link-01", clicks: 10 },
        { link: "link-02", clicks: 3 },
        { link: "link-03", clicks: 7 }
      ]
    }
  ]

  res.json(dados);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
