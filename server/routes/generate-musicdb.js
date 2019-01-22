const router = require('express').Router()

router.get('/api/generate-music-files', (req, res) => {
  res.end('Files')
})

module.exports = router;