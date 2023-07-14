const Song = require("../model/song.js");

const SongController = {
  getAllSongs: (req, res) => {
    return res.json(Song.getAllSongs());
  },
  getMostPlayedSongs: (req, res) => {
    const songs = Song.getAllSongs();
    const sortedPlaylist = [...songs].sort(
      (a, b) => b.playCount - a.playCount
    );
    return res.json(sortedPlaylist);
  },
  addSong: (req, res) => {
    const { title, artists, url } = req.body;

    if (!title || !artists || !url) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const song = Song.createSong(title, artists, url);

    return res.json({ message: "Song added to the playlist", song: song });
  },
  playSong: (req, res) => {
    const { uuid } = req.params;
    const song = Song.getSong(uuid);

    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }

    song.isPlaying = !song.isPlaying;
    if (song.isPlaying) {
      song.playCount++;
    }

    return res.json({ message: "Song play state updated", song });
  },
};

module.exports = SongController;
