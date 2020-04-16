const mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------

Movie.create([
  {
    title: 'The Fifth Element',
    director: ['Luc Besson'],
    writer: ['Luc Besson', 'Robert Mark Kamen'],
    releaseYear: 1997,
    metacriticScore: 52,
    seen: true
  },
  {
    title: 'The Big Lebowski',
    director: ['Ethan Coen', 'Joel Coen'],
    writer: ['Ethan Coen', 'Joel Coen'],
    releaseYear: 1998,
    metacriticScore: 71,
    seen: true
  },
  {
    title: "Beverly Hills Cop",
    director: ['Martin Brest'],
    writer: ['Daniel Petrie Jr.', 'Danilo Bach'],
    releaseYear: 1984,
    metacriticScore: 66,
    seen: true
  },
  {
    title: 'Pan\'s Labyrinth',
    director: ['Guillermo del Toro'],
    writer: ['Guillermo del Toro'],
    releaseYear: 2006,
    metacriticScore: 98,
    seen: false
  }
])

  .then(() => {
    console.log("Seed complete!")
    mongoose.connection.close();
  });
