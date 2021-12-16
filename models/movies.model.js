//const { INTEGER, DATE } = require("sequelize/dist");
const mongoose = require("mongoose");
const movies = mongoose.Schema({
  plot: String,
  genres: Array,
  runtime: Number,
  cast: Array,
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  countries: Array,
  released: Date,
  directors: Array,
  rated: String,
  awards: Object,
  nominations: String,
  year: String,
  imdb: Object,
  type: String,
  tomatoes: Object
})
module.exports = mongoose.model("movies",movies)