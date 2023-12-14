const express = require('express');
const router = express.Router();
const Log = require('../models/log');

// New Route
router.get('/new', async (req, res) => {
  res.render('New', {});
});
// Index Route
app.get('/', async(req, res) => {
    Log.find({}, (err, allLogs) => {
      if (err) {
        console.error(err);
      } else {
        res.render('Index', { logs: allLogs });
      }
    });
  });

// Create Route
app.post('/', (req, res) => {
  // Your create logic here
  res.send('received');
});
// Show Route
app.get('/:id', async(req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
      if (err) {
        console.error(err);
      } else {
        res.render('Show', { log: foundLog });
      }
    });
  });
module.exports = router;