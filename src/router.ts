import { Router } from 'express';

const router = Router();
// *** products routes *** //
router.get('/products', (req, res) => {
  res.json({ data: 'All productss' });
});

router.post('/products', (req, res) => {
  res.send('Create products');
});

router.get('/products/:id', (req, res) => {
  res.send('One products');
});

router.put('/products/:id', (req, res) => {
  res.send('Update products');
});

router.delete('/products/:id', (req, res) => {
  res.send('Delete products');
});

// *** Update (object) routes *** //
router.get('/update', (req, res) => {
  res.send('All updates');
});

router.post('/update', (req, res) => {
  res.send('Create update');
});

router.get('/update/:id', (req, res) => {
  res.send('One update');
});

router.put('/update/:id', (req, res) => {
  res.send('Update update');
});

router.delete('/update/:id', (req, res) => {
  res.send('Delete update');
});

// *** Update Point (object) routes *** //
router.get('/updatepoint', (req, res) => {
  res.send('All updatepoints');
});

router.post('/updatepoint', (req, res) => {
  res.send('Create updatepoint');
});

router.get('/updatepoint/:id', (req, res) => {
  res.send('One updatepoint');
});

router.put('/updatepoint/:id', (req, res) => {
  res.send('Update updatepoint');
});

router.delete('/updatepoint/:id', (req, res) => {
  res.send('Delete updatepoint');
});

export default router;
