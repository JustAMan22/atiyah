const express = require('express');
// const fetch = require('node-fetch').default;
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/duck-image', async (req, res) => {
    try {
        const response = await fetch('https://random-d.uk/api/v2/random');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching duck image:', error);
        res.status(500).json({ error: 'Failed to fetch duck image' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});