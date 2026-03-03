import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';

const db = new Database('database.sqlite');

// Create table for form submissions
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
      const stmt = db.prepare('INSERT INTO submissions (name, email, phone, message) VALUES (?, ?, ?, ?)');
      stmt.run(name, email, phone, message);
      res.json({ success: true });
    } catch (error) {
      console.error('Error saving submission:', error);
      res.status(500).json({ error: 'Failed to save submission' });
    }
  });

  app.get('/api/submissions', (req, res) => {
    try {
      const stmt = db.prepare('SELECT * FROM submissions ORDER BY created_at DESC');
      const submissions = stmt.all();
      res.json(submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      res.status(500).json({ error: 'Failed to fetch submissions' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
