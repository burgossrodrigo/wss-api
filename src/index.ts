import express from 'express'
import { json } from 'body-parser'
import { hokkHuobiRouter } from './routes/rest'

const app = express();

app.use(json());
app.use(hokkHuobiRouter);

app.listen(3000, () => {
    console.log(`server is listening on port: 3000`)
})

