const express = require("express");
const cors = require("cors");

// const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const query = request.query;

  console.log(query);

  return response.json([
    'Repositorie 1',
    'Repositorie 2',
  ]);
});

app.post("/repositories", (request, response) => {
  return response.json([
    'Repositorie 1',
    'Repositorie 2',
  ]);
});

app.put("/repositories/:id", (request, response) => {
  return response.json([
    'Repositorie 1',
    'Repositorie 2',
  ]);
});

app.delete("/repositories/:id", (request, response) => {
  return response.json([
    'Repositorie 1',
    'Repositorie 2',
  ]);
});

app.post("/repositories/:id/like", (request, response) => {
  return response.json([
    'Repositorie 1',
    'Repositorie 2',
  ]);
});

module.exports = app;
