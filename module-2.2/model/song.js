const { v4: uuidv4 } = require("uuid");

let playlist = [];

class Model {
  constructor(uuid, title, artists, url, isPlaying, playCount) {
    this.uuid = uuid;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.isPlaying = isPlaying;
    this.playCount = playCount;
  }
}
function getAllSongs() {
  return playlist;
}
function getSong(id) {
  return playlist.find((s) => s.uuid === id);
}
function createSong(title, artists, url) {
  const song = new Model(uuidv4(), title, artists, url, false, 0);
  playlist.push(song);
  return song;
}

module.exports = { getAllSongs, getSong, createSong };
