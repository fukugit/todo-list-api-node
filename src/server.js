const express = require('express');
const app = express();
console.log("start 1");

app.get('/:id', (req, res) => {
  console.log("Request URL : /" + req.params.id);
  res.status(200).send(req.params.id);
});

app.listen(3000, () => {
  console.log("listening");
});

