import express from 'express';

const app = express();

const PORT = process.env.PORT || 5700;

app.get('*', (req, res, next) => {
  res.send('SERVER RESPONDED!!!');
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})