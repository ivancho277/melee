const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use morgan logger for logging requests
//app.use(logger("dev"));
app.use(routes);
// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/melee_db", { useNewUrlParser: true });
mongodb: mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://admin:meleeonline1@ds155626.mlab.com:55626/heroku_ddvb0d4t" ||
    "mongodb://localhost/melee_db",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Send every request to the React app
// Define any API routes before this runs

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
