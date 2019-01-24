const router = require('express').Router()
const Interval = require('../models/interval')
// const Cmaj2 = require('../client/src/components/audio-files/CMajor2nd.wav')

router.get('/api/generate-music-files', async (req, res) => {

  Interval.remove({}, (err, interval) =>{
    if (err) throw err;
  });

    const cMajorSecond = new Interval({
      root: 'C',
      degree: 'Major Second',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/CMajor2nd.wav'
    })

    const cMajorThird = new Interval({
      root: 'C',
      degree: 'Major Third',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/CMajor3rd.wav'
    })

    const cPerfFourth = new Interval({
      root: 'C',
      degree: 'Perfect Fourth',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/CPerf4th.wav'
    }) 
    
    const cPerfFifth = new Interval({
      root: 'C',
      degree: 'Perfect Fifth',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/CPerf5th.wav'
    })

    const cMajorSixth = new Interval({
      root: 'C',
      degree: 'Major Sixth',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/CMajor6th.wav'
    })

    const cMajorSeventh = new Interval({
      root: 'C',
      degree: 'Major Seventh',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/CMajor7th.wav'
    })

    const cOctave = new Interval({
      root: 'C',
      degree: 'Octave',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/COctave.wav'
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