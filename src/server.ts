import express from 'express';
const app = express();
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signinUser } from './handlers/user';

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
app.post('/users', createNewUser);
app.post('/signin', signinUser);

export default app;
