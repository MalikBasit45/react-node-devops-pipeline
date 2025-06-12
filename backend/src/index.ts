import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Enable CORS for all origins
app.use(cors());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'OK', message: 'Backend is super healthy!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
