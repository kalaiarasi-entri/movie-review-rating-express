const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');

const allowedOrigins = [
  "http://localhost:5173",          // frontend dev
  "https://movie-review-rating-react.netlify.app/" // production frontend
];

app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin (like Postman or mobile apps)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS policy does not allow this origin."), false);
      }
      return callback(null, true);
    },
    credentials: true, // allow cookies or auth headers
  })
);
app.use(express.json());


const usersRoute = require('./routes/usersRoute');
const artistsRoute = require('./routes/artistsRoute');
const imagesRoute = require('./routes/imagesRoute');
const moviesRoute = require('./routes/moviesRoute');
const reviewsRoute = require('./routes/reviewsRoute');
const filtersRoute = require('./routes/filtersRoute');



app.use('/api/users', usersRoute);
app.use('/api/artists', artistsRoute);
app.use('/api/images', imagesRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/reviews', reviewsRoute);
app.use('/api/filters', filtersRoute);


const port = process.env.PORT || 8081;

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(port , () => console.log(`Node JS Server started on port ${port}`));