const router = require('express').Router()
const Interval = require('../models/interval')

router.get('/api/generate-music-files', async (req, res) => {
    const cMajorSecond = new Interval({
      root: 'C',
      degree: 'Major Second',
      note: 'D',
      source: ''
    })

    const cMajorThird = new Interval({
      name: 'C',
      degree: 'Major Third',
      note: 'E',
      source: ''
    })

    const cPerfFourth = new Interval({
      root: 'C',
      degree: 'Perfect Fourth',
      note: 'F',
      source: ''
    }) 
    
    const cPerfFifth = new Interval({
      root: 'C',
      degree: 'Perfect Fifth',
      note: 'G',
      source: ''
    })

    const cMajorSixth = new Interval({
      root: 'C',
      degree: 'Major Sixth',
      note: 'A',
      source: ''
    })

    const cMajorSeventh = new Interval({
      root: 'C',
      degree: 'Major Seventh',
      note: 'B',
      source: ''
    })

    const cOctave = new Interval({
      root: 'C',
      degree: 'Octave',
      note: 'C',
      source: ''
    })

    await cMajorSecond.save();
    await cMajorThird.save();
    await cPerfFourth.save();
    await cPerfFifth.save();
    await cMajorSixth.save();
    await cMajorSeventh.save();
    await cOctave.save();

    await res.end();
})

module.exports = router;