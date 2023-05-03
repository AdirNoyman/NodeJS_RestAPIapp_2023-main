import express from 'express';
const app = express();
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('Hello Adiros 🤓');
  res.status(200);
  res.json({ message: 'Hello' });
});

app.use('/api', protect, router);

export default app;
