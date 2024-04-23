const Movie = require("../models/movie");

async function create(req, res) {
  try {
    const movieDetails = req.body;
    const movie = await Movie.create(movieDetails);

    return res.status(201).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

async function findByRating(req, res) {
  try {
    const { rating } = req.params;
    const movies = await Movie.find({
      mpaaRating: rating,
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

async function findAll(req, res) {
  try {
    const movies = await Movie.find({});
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  create,
  findByRating,
  findAll,
};
