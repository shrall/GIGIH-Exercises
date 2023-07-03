const songList = [
  {
    title: "Song Title 1 Second",
    artists: [{ name: "Artist Name 1 Second" }],
    duration: 100,
  },
  {
    title: "Song Title 2 Seconds",
    artists: [{ name: "Artist Name 2 Seconds" }],
    duration: 2000,
  },
  {
    title: "Song Title 3 Seconds",
    artists: [{ name: "Artist Name 3 Seconds" }],
    duration: 3000,
  },
];

const songPromise = (time) =>
  new Promise((resolve, reject) => {
    if (time < 500) {
      reject("Song duration less than 0.5 seconds!");
    } else {
      setTimeout(resolve, time);
    }
  });

function checkSongPromise(promise) {
  console.log("All songs list: (promise)");
  songList.forEach((song) => {
    promise(song.duration)
      .then(() => {
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
        console.log("----------------------");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

checkSongPromise(songPromise);
