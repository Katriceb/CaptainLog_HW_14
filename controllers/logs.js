const express = require('express');
const router = express.Router();
const logs= require('../models/logs');

// Index Route

router.get('/', async (req, res) => {
  // res.send(captains_log);
  try {
      const foundlogs = await logs.find({});
      res.status(200).render('Index', {logs: foundlogs});
  } catch (err) {
      res.status(400).send(err);
  }
  
});

// New Route
router.get('/new', (req, res) => {
  res.render('New');
});

//delete
router.delete('/logs/:id', async (req, res) => {
  try {
    const deletedLog = await logs.findByIdAndDelete(req.params.id);
    console.log(deletedLog);
    res.status(200).redirect('/logs');
} catch (err) {
    res.status(400).send(err);
}
});
//update 

router.put('/logs/:id', async (req, res) => {
  if (req.body.ShipisBroken === 'on') {
      req.body.ShipisBroken = true;
  } else {
      req.body.ShipisBroken= false;
  }

  try {
      const updatedLogs = await logs.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
      console.log(updatedLog);
      res.status(200).redirect(`/Logs/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})




// Create Route
router.post('/', async (req, res) => {
  if(req.body.shipIsBroken=== 'on') { //if checked, req.body.ShipisBroken is set to 'on'
      req.body.shipIsBroken = true;
  } else {  //if not checked, req.body.ShipisBroken  is undefined
      req.body.shipIsBroken = false;
  }

  try {
      const createdLog = await logs.create(req.body);
      res.status(200).redirect("/logs");
  } catch (err) {
      res.status(400).send(err);
  }});

  //edit
  router.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundLog = await logs.findById(req.params.id);
        console.log('foundLogs');
        console.log(foundLog)
        res.status(200).render('Edit', {fruit: foundLog});
    } catch (err) {
        res.status(400).send(err);
    }
})
// Show Route

router.get('/logs/:id', async (req, res) => {
  // res.send(logs[req.params.indexOflogsArray]);
  try {
      const foundLog = await logs.findById(req.params.id);
      res.render('logs/Show', {log: foundLog});
  } catch (err) {
      res.status(400).send(err);
  }

})








module.exports = router;