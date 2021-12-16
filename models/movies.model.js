//const { INTEGER, DATE } = require("sequelize/dist");

module.exports = mongoose => {
    const Movies = mongoose.model(
      "movies",
      mongoose.Schema(
        {
            plot : String,
            genres : Array,
            runtime : Number,
            cast : Array,
            num_mflix_comments:Number,
            title : String,
            fullplot : String,
            countries : Array,
            released : Date,
            directors : Array,
            rated : String,
            awards : Object,
            nominations : String,
            year : String,
            imdb : Object,
            type : String,
            tomatoes : Object,
        },
        { timestamps: true }
      )
    );
  
    return Movies;
  };

  