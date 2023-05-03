import * as dotenv from 'dotenv';
dotenv.config();

import app from './server';

const port = 3000;

app.listen(port, () => {
  console.log(`Sever is running on port ${port} 🤓🤘`);
});
