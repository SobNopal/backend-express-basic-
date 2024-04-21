const express = require('express');
const usersRoute = require('./src/routes/users');
const middlewareLogRequest = require('./src/middleware/logs');

const app = express();

// app.method(path, handler);
app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoute);

app.listen(3000, () => {
    console.log('Server berhasil run port 3000');
})