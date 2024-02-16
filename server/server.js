const express = require("express");
const app = express();
const port = 3000;
// Importa a função do módulo
const fetchData = require('./database');

app.use(express.json());

app.get("/api/data", (req, res) => {

  const rawData = fetchData();

  res.json(rawData);
});

app.get("/api/datatime", (req, res) => {

  // Validação do dado enviado
  if (!req.query.currentDate) {
    res.status(400).json(
      `Missing query param: 'currentDate'`
    );
  }

  // Data de referência a ser comparada
  const dateReference = new Date(req.query.currentDate + 'T00:00:00');

  // Obtenção dos dados da base
  const rawData = fetchData();

  const refinedData = rawData.reduce((acc, curr) => {
    // Obtém o dado do objeto presente no formato Data
    let currDate = new Date(curr.date + 'T00:00:00');

    // Calcula a diferença em milissegundos
    const diffInMilliseconds = Math.abs(dateReference - currDate);

    // Converte a diferença para dias
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    // Verifica se a diferença é menor ou igual a 7 dias
    if (dateReference >= currDate && diffInDays <= 7) {
      console.log(curr.date);
      acc.push(curr);
    }

    return acc;
  }, [])

  // console.log(refinedData);

  res.json(refinedData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
