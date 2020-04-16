const Movie = require('../Movie');

module.exports = {

  // ======== CREATE ========

  addMovie: (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({ success: false, error: 'No movie provided' });
    }
    const movie = new Movie(body);
    if (!movie) {
      return res.status(400).json({ success: false, error: err });
    }
    movie.save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: movie._id,
          message: 'successfully added movie!'
        })
      })
      .catch(err => {
        return res.status(400).json({
          err,
          message: 'Failed to add movie!'
        });
      });
  },

  // ======== READ: ========

  findAll: async (req, res) => {
    await Movie.find({}, (err, movies) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!movies.length) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: movies });
    })
      .catch(err => console.log(err));
  },

  findById: async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!movie) {
        return res.status(404).json({ success: false, error: 'Movie not found!' });
      }
      return res.status(200).json({ success: true, data: movie });
    })
      .catch(err => console.log(err));
  },

  // ======== UPDATE: ========

  updateMovie: async (req, res) => {
    const body = req.body
    if (!body) {
      return res.status(400).json({ success: false, error: "You must provide a movie to update" });
    }
    await Movie.findOneAndUpdate(
      { _id: body._id },
      {
        // this function is only built to update whether or not
        // the movie is seen. But we can update more stuff based
        // on what we pass in the 'put' body

        // title: body.title,
        // director: body.director,
        // writer: body.writer,
        // releaseYear: body.releaseYear,
        // metacriticScore: body.metacriticScore,
        seen: body.seen,
        updatedAt: Date.now()
      },
      // passing { new: true } assures that the function will return
      // the NEW document and not the old one.
      { new: true }
    )
      .then(update => {
        return res.json({ success: true, movie: update });
      });
  },

  // ======== DELETE ========

  deleteById: async (req, res) => {
    await Movie.findByIdAndDelete(
      { _id: req.params.id },
    )
      .then(result => res.json({ success: true, deleted: result.title }));
  }
}