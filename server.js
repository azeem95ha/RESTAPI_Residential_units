const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('units.db'); // Replace with your database file path

app.use(express.json()); // To parse JSON request bodies

// API endpoints (you'll need to add more for create, update, delete)
app.get('/api/units', (req, res) => {
  db.all('SELECT * FROM Units', (err, rows) => { 
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ units: rows }); 
    }
  });
});

// ... Add other API endpoints for create, update, delete

app.listen(3000, () => { 
  console.log('Server listening on port 3000');
});