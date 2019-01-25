const router = require('express').Router()
const Interval = require('../models/interval')

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

    const cMinorSixth = new Interval({
      root: 'C',
      degree: 'Minor Sixth',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/C+Minor+6th.wav'
    })

    const cMinorSeventh = new Interval({
      root: 'C',
      degree: 'Minor Seventh',
      mote: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/C+Minor+7th.wav'
    })

    const cMinorSecond = new Interval({
      root: 'C',
      degree: 'Minor Second',
      note: 'D Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/Minor+Second.wav'
    })

    const cMinorThird = new Interval({
      root: 'C',
      degree: 'Minor Third',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/C+Minor+Third.wav'
    })

    const bFlatMaj2 = new Interval({
      root: 'B Flat',
      degree: 'Major Second',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+2.wav'
    })

    const bFlatMaj3 = new Interval({
      root: 'B Flat',
      degree: 'Major Third',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+3.wav'
    })

    const bFlatMaj6 = new Interval({
      root: 'B Flat',
      degree: 'Major Sixth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+6.wav'
    })

    const bFlatMaj7 = new Interval({
      root: 'B Flat',
      degree: 'Major Seventh',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+7.wav'
    })

    const bFlatMin2 = new Interval({
      root: 'B Flat',
      degree: 'Minor Second',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+2.wav'
    })

    const bFlatMin3 = new Interval({
      root: 'B Flat',
      degree: 'Minor Second',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+2.wav'
    })

    const bFlatMin6 = new Interval({
      root: 'B Flat',
      degree: 'Minor Sixth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+6.wav'
    })

    const bFlatMin7 = new Interval({
      root: 'B Flat',
      degree: 'Minor Seventh',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+7.wav'
    })

    const bFlatOctave = new Interval({
      root: 'B Flat',
      degree: 'Octave',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Octave.wav'
    })

    const bFlatPerf4 = new Interval({
      root: 'B Flat',
      degree: 'Perfect Fourth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Perf+4.wav'
    })

    const bFlatPerf5 = new Interval({
      root: 'B Flat',
      degree: 'Perfect Fifth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Perf+5.wav'
    })

    const EMaj2 = new Interval({
      root: 'E',
      degree: 'Major Second',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+2.wav'
    })

    const EMaj3 = new Interval({
      root: 'E',
      degree: 'Major Third',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+3.wav'
    })

    const EPerf4 = new Interval({
      root: 'E',
      degree: 'Perfect Fourth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Perf+4.wav'
    })

    const EPerf5 = new Interval({
      root: 'E',
      degree: 'Perfect Fifth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Perf+5.wav'
    })

    const EMaj6 = new Interval({
      root: 'E',
      degree: 'Major Sixth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+6.wav'
    })

    const EMaj7 = new Interval({
      root: 'E',
      degree: 'Major Seventh',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+7.wav'
    })

    const EMin2 = new Interval({
      root: 'E',
      degree: 'Minor Second',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+2.wav'
    })

    const EMin3 = new Interval({
      root: 'E',
      degree: 'Minor Third',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+3.wav'
    })

    const EMin6 = new Interval({
      root: 'E',
      degree: 'Minor Sixth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+6.wav'
    })

    const EMin7 = new Interval({
      root: 'E',
      degree: 'Minor Seventh',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+7.wav'
    })

    const EOctave = new Interval({
      root: 'E',
      degree: 'Octave',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Octave.wav'
    })

    const FMaj2 = new Interval({
      root: 'F',
      degree: 'Major Second',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Maj+Second.wav'
    })

    const FMaj3 = new Interval({
      root: 'F',
      degree: 'Major Third',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Major+3.wav'
    })

    const FPerf4 = new Interval({
      root: 'F',
      degree: 'Perfect Fourth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Perf+4.wav'
    })

    const FPerf5 = new Interval({
      root: 'F',
      degree: 'Perfect Fifth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Perf+5.wav'
    })

    const FMaj6 = new Interval({
      root: 'F',
      degree: 'Major Sixth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Maj+6.wav'
    })

    const FMaj7 = new Interval({
      root: 'F',
      degree: 'Major Seventh',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Maj+7.wav'
    })

    const FMin2 = new Interval({
      root: 'F',
      degree: 'Minor Second',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Minor+Second.wav'
    })

    const FMin3 = new Interval({
      root: 'F',
      degree: 'Minor Third ',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Minor+Third.wav'
    })

    const FMin6 = new Interval({
      root: 'F',
      degree: 'Minor Sixth',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Min+6.wav'
    })

    const FMin7 = new Interval({
      root: 'F',
      degree: 'Minor Seventh',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Min+7.wav'
    })

    const FOctave = new Interval({
      root: 'F',
      degree: 'Octave',
      note: '',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Octave.wav'
    })

    await cMajorSecond.save();
    await cMajorThird.save();
    await cPerfFourth.save();
    await cPerfFifth.save();
    await cMajorSixth.save();
    await cMajorSeventh.save();
    await cOctave.save();
    await cMinorSecond.save();
    await cMinorSeventh.save();
    await cMinorThird.save();
    await cMinorSixth.save();
    await bFlatMaj2.save();
    await bFlatMaj3.save();
    await bFlatMaj6.save();
    await bFlatMaj7.save();
    await bFlatMin2.save();
    await bFlatMin3.save();
    await bFlatMin6.save();
    await bFlatMin7.save();
    await bFlatOctave.save();
    await bFlatPerf4.save();
    await bFlatPerf5.save();
    await EMaj2.save();
    await EMaj3.save();
    await EPerf4.save();
    await EPerf5.save();
    await EMin2.save();
    await EMin3.save();
    await EMaj6.save();
    await EMaj7.save();
    await EMin6.save();
    await EMin7.save();
    await EOctave.save();
    await FMaj2.save();
    await FMaj3.save();
    await FPerf4.save();
    await FPerf5.save();
    await FMin2.save();
    await FMin3.save();
    await FMaj6.save();
    await FMaj7.save();
    await FMin6.save();
    await FMin7.save();
    await FOctave.save()

    await res.end();
})

module.exports = router;