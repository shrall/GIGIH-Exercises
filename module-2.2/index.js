const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(bodyParser.json());

let playlist = [];

app.post("/song/add", (req, res) => {
  const { title, artists, url } = req.body;

  if (!title || !artists || !url) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const song = { uuid: uuidv4(), title, artists, url };
  playlist.push(song);

  return res.json({ message: "Song added to the playlist", song: song });
});

app.get("/song/play/:uuid", (req, res) => {
  const { uuid } = req.params;
  const song = playlist.find((song) => song.uuid === uuid);

  if (!song) {
    return res.status(404).json({ error: "Song not found" });
  }

  return res.json(song);
});

app.get("/song/list", (req, res) => {
  return res.json(playlist);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});