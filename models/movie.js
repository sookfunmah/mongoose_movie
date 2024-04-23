const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

const movieSchema = new Schema(
  {
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
