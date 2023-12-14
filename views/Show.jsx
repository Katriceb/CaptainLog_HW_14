// Show Route
router.get('/:id', async (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
      if (err) {
        console.error(err);
      } else {
        res.render('Show', { log: foundLog });
      }
    });
  });
  module.exports = Show; 