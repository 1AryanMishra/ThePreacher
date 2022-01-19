import express from "express";
import path from 'path';

const app = express();

app.use(express.static('./client'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/index.html'));
})



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started at PORT ${port}`));