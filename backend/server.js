const express = require('express');
const cors = require('cors');
const { queryOllamaModel } = require('./ollamaService'); 
const constants = require('../constants/constants');

const app = express();
const port = constants.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/query', async (req, res) => {
    const { query } = req.body;
    console.log('Received query:', query);
    try {
        const response = await queryOllamaModel(query);
        res.json({ response });
    } catch (error) {
        console.error('Error querying model:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});