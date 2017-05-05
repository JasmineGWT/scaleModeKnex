exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('genres').del(),
    knex('genres').insert({
      id: 1,
      name: 'Blues',
      scale1: 'Blues',
      scale2: 'Pentatonic Minor',
      scale3: 'Pentatonic Major'
    }),
    knex('genres').insert({
      id: 2,
      name: 'Jazz',
      scale1: 'Major',
      scale2: 'Lydian',
      scale3: 'Mixolydian'
    }),
    knex('genres').insert({
      id: 3,
      name: 'Psychedelic',
      scale1: 'Harmonic Minor',
      scale2: 'Dorian',
      scale3: 'Mixolydian'
    }),
    knex('genres').insert({
      id: 4,
      name: 'Middle Eastern',
      scale1: 'Dorian',
      scale2: 'Phrygian Dominant',
      scale3: 'Mixolydian'
    })
  )
}
