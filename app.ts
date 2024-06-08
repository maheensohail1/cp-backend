import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import coursesRouter from './routes/courses-routes';

//comment added to check the CI/CD
const PORT = 5000;
const app = express();

app.use(cors({
  origin: 'http://localhost:4000', // Update this to match your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify the allowed headers
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/courses', coursesRouter)

app.listen(PORT, () => {
  console.log('App started at ', PORT)
})
