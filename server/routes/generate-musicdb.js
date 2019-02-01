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
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+3.wav'
    })

    const bFlatMaj6 = new Interval({
      root: 'B Flat',
      degree: 'Major Sixth',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+6.wav'
    })

    const bFlatMaj7 = new Interval({
      root: 'B Flat',
      degree: 'Major Seventh',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Maj+7.wav'
    })

    const bFlatMin2 = new Interval({
      root: 'B Flat',
      degree: 'Minor Second',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+2.wav'
    })

    const bFlatMin3 = new Interval({
      root: 'B Flat',
      degree: 'Minor Second',
      note: 'D Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+3.wav'
    })

    const bFlatMin6 = new Interval({
      root: 'B Flat',
      degree: 'Minor Sixth',
      note: 'G Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+6.wav'
    })

    const bFlatMin7 = new Interval({
      root: 'B Flat',
      degree: 'Minor Seventh',
      note: 'A Flat',
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
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Perf+4.wav'
    })

    const bFlatPerf5 = new Interval({
      root: 'B Flat',
      degree: 'Perfect Fifth',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Perf+5.wav'
    })

    const EMaj2 = new Interval({
      root: 'E',
      degree: 'Major Second',
      note: 'F Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+2.wav'
    })

    const EMaj3 = new Interval({
      root: 'E',
      degree: 'Major Third',
      note: 'G Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+3.wav'
    })

    const EPerf4 = new Interval({
      root: 'E',
      degree: 'Perfect Fourth',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Perf+4.wav'
    })

    const EPerf5 = new Interval({
      root: 'E',
      degree: 'Perfect Fifth',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Perf+5.wav'
    })

    const EMaj6 = new Interval({
      root: 'E',
      degree: 'Major Sixth',
      note: 'C Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+6.wav'
    })

    const EMaj7 = new Interval({
      root: 'E',
      degree: 'Major Seventh',
      note: 'D Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Maj+7.wav'
    })

    const EMin2 = new Interval({
      root: 'E',
      degree: 'Minor Second',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+2.wav'
    })

    const EMin3 = new Interval({
      root: 'E',
      degree: 'Minor Third',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+3.wav'
    })

    const EMin6 = new Interval({
      root: 'E',
      degree: 'Minor Sixth',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+6.wav'
    })

    const EMin7 = new Interval({
      root: 'E',
      degree: 'Minor Seventh',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Min+7.wav'
    })

    const EOctave = new Interval({
      root: 'E',
      degree: 'Octave',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Octave.wav'
    })

    const FMaj2 = new Interval({
      root: 'F',
      degree: 'Major Second',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Maj+Second.wav'
    })

    const FMaj3 = new Interval({
      root: 'F',
      degree: 'Major Third',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Major+3.wav'
    })

    const FPerf4 = new Interval({
      root: 'F',
      degree: 'Perfect Fourth',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Perf+4.wav'
    })

    const FPerf5 = new Interval({
      root: 'F',
      degree: 'Perfect Fifth',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Perf+5.wav'
    })

    const FMaj6 = new Interval({
      root: 'F',
      degree: 'Major Sixth',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Maj+6.wav'
    })

    const FMaj7 = new Interval({
      root: 'F',
      degree: 'Major Seventh',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Maj+7.wav'
    })

    const FMin2 = new Interval({
      root: 'F',
      degree: 'Minor Second',
      note: 'G Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Minor+Second.wav'
    })

    const FMin3 = new Interval({
      root: 'F',
      degree: 'Minor Third',
      note: 'A Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Minor+Third.wav'
    })

    const FMin6 = new Interval({
      root: 'F',
      degree: 'Minor Sixth',
      note: 'D Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Min+6.wav'
    })

    const FMin7 = new Interval({
      root: 'F',
      degree: 'Minor Seventh',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Min+7.wav'
    })

    const FOctave = new Interval({
      root: 'F',
      degree: 'Octave',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Octave.wav'
    })

    const GMaj2 = new Interval({
      root: 'G',
      degree: 'Major Second',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Major+Second.wav'
    })

    const GMaj3 = new Interval({
      root: 'G',
      degree: 'Major Third',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Major+Third.wav'
    })

    const GMaj6 = new Interval({
      root: 'G',
      degree: 'Major Sixth',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Major+Sixth.wav'
    })

    const GMaj7 = new Interval({
      root: 'G',
      degree: 'Major Seventh',
      note: 'F Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Major+Seventh.wav'
    })

    const GMin2 = new Interval({
      root: 'G',
      degree: 'Minor Second',
      note: 'A Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Minor+Second.wav'
    })

    const GMin3 = new Interval({
      root: 'G',
      degree: 'Minor Third',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Minor+Third.wav'
    })

    const GMin6 = new Interval({
      root: 'G',
      degree: 'Minor Sixth',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Minor+Sixth.wav'
    })

    const GMin7 = new Interval({
      root: 'G',
      degree: 'Minor Seventh',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Flat+Min+7.wav'
    })

    const GOctave = new Interval({
      root: 'G',
      degree: 'Octave',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Octave.wav'
    })

    const GPerf4 = new Interval({
      root: 'G',
      degree: 'Perfect Fourth',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Perf+Fourth.wav'
    })

    const GPerf5 = new Interval({
      root: 'G',
      degree: 'Perfect Fifth',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/G+Perf+Fifth.wav'
    })

    const AMaj2 = new Interval({
      root: 'A',
      degree: 'Major Second',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Major+Second.wav'
    })

    const AMaj3 = new Interval({
      root: 'A',
      degree: 'Major Third',
      note: 'C Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Major+Third.wav'
    })

    const AMaj6 = new Interval({
      root: 'A',
      degree: 'Major Sixth',
      note: 'F Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Major+Sixth.wav'
    })

    const AMaj7 = new Interval({
      root: 'A',
      degree: 'Major Seventh',
      note: 'G Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Major+Seventh.wav'
    })

    const AMin2 = new Interval({
      root: 'A',
      degree: 'Minor Second',
      note: 'A Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Minor+Second.wav'
    })

    const AMin3 = new Interval({
      root: 'A',
      degree: 'Minor Second',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Minor+Third.wav'
    })

    const AMin6 = new Interval({
      root: 'A',
      degree: 'Minor Sixth',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Minor+Sixth.wav'
    })

    const AMin7 = new Interval({
      root: 'A',
      degree: 'Minor Seventh',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Minor+Seventh.wav'
    })

    const AOctave = new Interval({
      root: 'A',
      degree: 'Octave',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Octave.wav'
    })

    const APerf4 = new Interval({
      root: 'A',
      degree: 'Perfect Fourth',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Perf+Fourth.wav'
    })

    const APerf5 = new Interval({
      root: 'A',
      degree: 'Perfect Fifth',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Perf+Fifth.wav'
    })

    const FSharpMaj2 = new Interval({
      root: 'F Sharp',
      degree: 'Major Second',
      note: 'G Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Major+Second.wav'
    })

    const FSharpMaj3 = new Interval({
      root: 'F Sharp',
      degree: 'Major Third',
      note: 'G Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Major+Third.wav'
    })

    const FSharpMaj6 = new Interval({
      root: 'F Sharp',
      degree: 'Major Sixth',
      note: 'D Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Major+Sixth.wav'
    })

    const FSharpMaj7 = new Interval({
      root: 'F Sharp',
      degree: 'Major Seventh',
      note: 'E Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Major+Seventh.wav'
    })

    const FSharpMin2 = new Interval({
      root: 'F Sharp',
      degree: 'Minor Second',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Minor+Second.wav'
    })

    const FSharpMin3 = new Interval({
      root: 'F Sharp',
      degree: 'Minor Second',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Minor+Third.wav'
    })

    const FSharpMin6 = new Interval({
      root: 'F Sharp',
      degree: 'Minor Sixth',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Minor+Sixth.wav'
    })

    const FSharpMin7 = new Interval({
      root: 'F Sharp',
      degree: 'Minor Seventh',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Minor+Seventh.wav'
    })

    const FSharpOctave = new Interval({
      root: 'F Sharp',
      degree: 'Octave',
      note: 'F Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Octave.wav'
    })

    const FSharpPerf4 = new Interval({
      root: 'F Sharp',
      degree: 'Perfect Fourth',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Perf+Fourth.wav'
    })

    const FSharpPerf5 = new Interval({
      root: 'F Sharp',
      degree: 'Perfect Fifth',
      note: 'C Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/F+Sharp+Perf+Fifth.wav'
    })

    const bMaj2 = new Interval({
      root: 'B',
      degree: 'Major Second',
      note: 'C Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Major+Second.wav'
    })

    const bMaj3 = new Interval({
      root: 'B',
      degree: 'Major Third',
      note: 'D Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Major+Third.wav'
    })

    const bMaj6 = new Interval({
      root: 'B',
      degree: 'Major Sixth',
      note: 'G Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Major+Sixth.wav'
    })

    const bMaj7 = new Interval({
      root: 'B',
      degree: 'Major Seventh',
      note: 'A Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Major+Seventh.wav'
    })

    const bMin2 = new Interval({
      root: 'B',
      degree: 'Minor Second',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Minor+Second.wav'
    })

    const bMin3 = new Interval({
      root: 'B',
      degree: 'Minor Second',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Minor+Third.wav'
    })

    const bMin6 = new Interval({
      root: 'B',
      degree: 'Minor Sixth',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Minor+Sixth.wav'
    })

    const bMin7 = new Interval({
      root: 'B',
      degree: 'Minor Seventh',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Minor+Seventh.wav'
    })

    const bOctave = new Interval({
      root: 'B',
      degree: 'Octave',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Octave.wav'
    })

    const bPerf4 = new Interval({
      root: 'B',
      degree: 'Perfect Fourth',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Perf+4.wav'
    })

    const bPerf5 = new Interval({
      root: 'B',
      degree: 'Perfect Fifth',
      note: 'F Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/B+Perf+5.wav'
    })

    const aFlatMaj2 = new Interval({
      root: 'A Flat',
      degree: 'Major Second',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Major+Second.wav'
    })

    const aFlatMaj3 = new Interval({
      root: 'A Flat',
      degree: 'Major Third',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Major+Third.wav'
    })

    const aFlatMaj6 = new Interval({
      root: 'A Flat',
      degree: 'Major Sixth',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Major+Sixth.wav'
    })

    const aFlatMaj7 = new Interval({
      root: 'A Flat',
      degree: 'Major Seventh',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Major+Seventh.wav'
    })

    const aFlatMin2 = new Interval({
      root: 'A Flat',
      degree: 'Minor Second',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Minor+Second.wav'
    })

    const aFlatMin3 = new Interval({
      root: 'A Flat',
      degree: 'Minor Second',
      note: 'C Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Minor+Third.wav'
    })

    const aFlatMin6 = new Interval({
      root: 'A Flat',
      degree: 'Minor Sixth',
      note: 'F Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Minor+Sixth.wavv'
    })

    const aFlatMin7 = new Interval({
      root: 'A Flat',
      degree: 'Minor Seventh',
      note: 'G Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Minor+Seventh.wav'
    })

    const aFlatOctave = new Interval({
      root: 'A Flat',
      degree: 'Octave',
      note: 'A Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Octave.wav'
    })

    const aFlatPerf4 = new Interval({
      root: 'A Flat',
      degree: 'Perfect Fourth',
      note: 'D Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Perf+Fourth.wav'
    })

    const aFlatPerf5 = new Interval({
      root: 'A Flat',
      degree: 'Perfect Fifth',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/A+Flat+Perf+Fifth.wav'
    })

    const dFlatMaj2 = new Interval({
      root: 'D Flat',
      degree: 'Major Second',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Major+Second.wav'
    })

    const dFlatMaj3 = new Interval({
      root: 'D Flat',
      degree: 'Major Third',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Major+Third.wav'
    })

    const dFlatMaj6 = new Interval({
      root: 'D Flat',
      degree: 'Major Sixth',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Maj+6.wav'
    })

    const dFlatMaj7 = new Interval({
      root: 'D Flat',
      degree: 'Major Seventh',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Maj+7.wav'
    })

    const dFlatMin2 = new Interval({
      root: 'D Flat',
      degree: 'Minor Second',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Minor+Second.wav'
    })

    const dFlatMin3 = new Interval({
      root: 'D Flat',
      degree: 'Minor Second',
      note: 'F Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Minor+Third.wav'
    })

    const dFlatMin6 = new Interval({
      root: 'D Flat',
      degree: 'Minor Sixth',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Minor+6.wav'
    })

    const dFlatMin7 = new Interval({
      root: 'D Flat',
      degree: 'Minor Seventh',
      note: 'C Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Min+7.wav'
    })

    const dFlatOctave = new Interval({
      root: 'D Flat',
      degree: 'Octave',
      note: 'D Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Octave.wav'
    })

    const dFlatPerf4 = new Interval({
      root: 'D Flat',
      degree: 'Perfect Fourth',
      note: 'G Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Perf+4.wav'
    })

    const dFlatPerf5 = new Interval({
      root: 'D Flat',
      degree: 'Perfect Fifth',
      note: 'A Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Flat+Perf+5.wav'
    })

    const dMaj2 = new Interval({
      root: 'D',
      degree: 'Major Second',
      note: 'E',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Maj+2.wav'
    })

    const dMaj3 = new Interval({
      root: 'D',
      degree: 'Major Third',
      note: 'F Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Maj+3.wav'
    })

    const dMaj6 = new Interval({
      root: 'D',
      degree: 'Major Sixth',
      note: 'B',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Maj+6.wav'
    })

    const dMaj7 = new Interval({
      root: 'D',
      degree: 'Major Seventh',
      note: 'C Sharp',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Maj+7.wav'
    })

    const dOctave = new Interval({
      root: 'D',
      degree: 'Octave',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Octave.wav'
    })

    const dPerf4 = new Interval({
      root: 'D',
      degree: 'Perfect Fourth',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Perf+4.wav'
    })

    const dPerf5 = new Interval({
      root: 'D',
      degree: 'Perfect Fifth',
      note: 'A',
      source: 'https://s3.amazonaws.com/mortfornintervals/D+Perf+5.wav'
    })

    const eFlatMaj2 = new Interval({
      root: 'E Flat',
      degree: 'Major Second',
      note: 'F',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Maj+2.wav'
    })

    const eFlatMaj3 = new Interval({
      root: 'E Flat',
      degree: 'Major Third',
      note: 'G',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Maj+3.wav'
    })

    const eFlatMaj6 = new Interval({
      root: 'E Flat',
      degree: 'Major Sixth',
      note: 'C',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Maj+6.wav'
    })

    const eFlatMaj7 = new Interval({
      root: 'E Flat',
      degree: 'Major Seventh',
      note: 'D',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Maj+7.wav'
    })

    const eFlatOctave = new Interval({
      root: 'E Flat',
      degree: 'Octave',
      note: 'E Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Octave.wav'
    })

    const eFlatPerf4 = new Interval({
      root: 'E Flat',
      degree: 'Perfect Fourth',
      note: 'A Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Perf+4.wav'
    })

    const eFlatPerf5 = new Interval({
      root: 'E Flat',
      degree: 'Perfect Fifth',
      note: 'B Flat',
      source: 'https://s3.amazonaws.com/mortfornintervals/E+Flat+Perf+5.wav'
    })
    
    await FMin2.save();
    await cMajorSixth.save();
    await EMin3.save();
    await cPerfFourth.save();
    await FPerf5.save()
    await cMajorSeventh.save();
    await bFlatMin2.save();
    await EMaj7.save();
    await bFlatPerf4.save();
    await cOctave.save();
    await cMinorSecond.save();
    await eFlatMaj6.save()
    await FMaj2.save();
    await bFlatMin7.save();
    await bFlatMaj6.save();
    await cMinorSeventh.save();
    await EMin7.save();
    await cMinorThird.save();
    await cMinorSixth.save();
    await bFlatMaj2.save();
    await FPerf4.save();
    await bFlatMaj3.save();
    await bFlatMaj7.save();
    await EMin2.save();
    await FMaj3.save();
    await bFlatMin3.save();
    await cMajorSecond.save();
    await bFlatMin6.save();
    await EMaj3.save();
    await bFlatOctave.save();
    await bFlatPerf5.save();
    await EMaj6.save();
    await FMaj6.save();
    await cMajorThird.save();
    await EMaj2.save();
    await EPerf5.save();
    await FMin3.save();
    await EMin6.save();
    await cPerfFifth.save();
    await EOctave.save();
    await EPerf4.save();
    await FMaj7.save();
    await FMin6.save();
    await FMin7.save();
    await FOctave.save()
    await GMaj2.save();
    await GMin2.save();
    await GMaj3.save();
    await eFlatMaj2.save()
    await GPerf4.save();
    await GPerf5.save();
    await GMaj6.save();
    await GMaj7.save();
    await GOctave.save();
    await AMaj2.save();
    await AMaj3.save();
    await APerf4.save();
    await APerf5.save();
    await AMaj6.save();
    await AMaj7.save();
    await AOctave.save();
    await FSharpMaj2.save();
    await FSharpMaj3.save()
    await FSharpPerf4.save();
    await FSharpPerf5.save();
    await FSharpMaj6.save();
    await FSharpMaj7.save();
    await FOctave.save();
    await bFlatMaj2.save();
    await bFlatMaj3.save()
    await bFlatPerf4.save();
    await bFlatPerf5.save();
    await bFlatMaj6.save();
    await bFlatMaj7.save();
    await bFlatOctave.save()
    await aFlatMaj2.save();
    await aFlatMaj3.save();
    await aFlatPerf4.save()
    await aFlatPerf5.save()
    await FSharpOctave.save()
    await aFlatMaj6.save()
    await aFlatMaj7.save()
    await aFlatOctave.save()
    await dFlatMaj2.save()
    await dFlatMaj3.save()
    await dFlatPerf4.save()
    await dFlatPerf5.save()
    await dFlatMaj6.save()
    await dFlatMaj7.save()
    await dFlatOctave.save()
    await dMaj2.save()
    await dMaj3.save()
    await dPerf4.save()
    await dPerf5.save()
    await dMaj6.save()
    await dMaj7.save()
    await dOctave.save()
    await eFlatMaj3.save()
    await eFlatPerf4.save()
    await eFlatPerf5.save()
    await eFlatMaj7.save()
    await eFlatOctave.save()
    await bMaj2.save()
    await bMaj3.save()
    await bPerf4.save()
    await bPerf5.save()
    await bMaj6.save()
    await bMaj7.save()
    await bOctave.save()

    await res.end();
})

module.exports = router;