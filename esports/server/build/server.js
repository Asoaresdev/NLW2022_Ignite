// const express = require('express') forma antiga de importar o express
import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        {
            id: 1,
            name: "Anúncio"
        },
        {
            id: 2,
            name: "Anúncio 2"
        },
        {
            id: 3,
            name: "Anúncio 3"
        }
    ]);
});
app.listen(3003);
