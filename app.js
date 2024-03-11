require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 5000 || process.env.PORT;

app.get('', (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});

const port = process.env.PORT || 5000; // Change 3001 to any available port number
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});