const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const SongController = require("./controller/song.js");

const app = express();
const upload = multer();
app.use(bodyParser.json());
app.use(upload.any());

app.get("/song/list", SongController.getAllSongs);

app.get("/song/list/most-played", SongController.getMostPlayedSongs);

app.post("/song/add", SongController.addSong);

app.get("/song/play/:uuid", SongController.playSong);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
