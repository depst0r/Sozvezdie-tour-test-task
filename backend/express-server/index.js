const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/', (req, res) => {
    res.send({ data });
});

app.get('/:id', (req, res) => {
  if (Number(req.params.id) || Number(req.params.id) === 0) {
    const item = data.find((i) => i.id === +req.params.id)

    if (item) {
      res.send({ data: item });
    } else {
      res.send({ message: 'item not found!' });
    }
  } else {
    res.send({ message: 'route not match!' });
  }
});

app.listen(9000, () => {
    console.log('Application listening on port 9000!');
});
