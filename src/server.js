const express = require('express');
const todosRoutes = require('./todos.routes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(todosRoutes);

app.get("/health", (req, res) => {
    return res.json("success")
})

app.listen(3333, () => console.log("Server tá ON",));