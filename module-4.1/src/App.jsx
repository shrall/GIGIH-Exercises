import MainLayout from "./layouts/MainLayout"
import SongCard from "./components/SongCard"
import Section from "./components/Section"

function App() {
  const songs = [
    {
      imageUrl:
        'https://yt3.googleusercontent.com/5PWVj9wPhRvJvY0RgLPnrMavM_RgS2jLSCgC4fUTsv8EAMzzQIYekw7FOdlA3RToXFEihTabYw=s900-c-k-c0x00ffffff-no-rj',
      title: 'LIMBO',
      artist: 'Keshi',
    },
    {
      imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb5740341f14a0f464aa654ff4',
      title: 'Paragraphs',
      artist: 'Luke Chiang',
    },
    {
      imageUrl:
        'https://yt3.googleusercontent.com/ytc/AGIKgqOE2odAevc22sdCkQsZ3of410-sHBKA5ZhjeBxaZQ=s900-c-k-c0x00ffffff-no-rj',
      title: 'Happier Than Ever',
      artist: 'Billie Eilish',
    },
    {
      imageUrl:
        'https://yt3.googleusercontent.com/gU57ObmwaSJczV-USg3xNowTZk6PzaoF0AayIOIDGWxObWE6kx-AWN4rgfMKd8VNbkmmClRZNQ=s900-c-k-c0x00ffffff-no-rj',
      title: 'Oceans & Engines',
      artist: 'NIKI',
    },
  ];

  return (
    <MainLayout>
      <div className="bg-white">
        <Section title="Trending Songs">
          {songs.map((song, index) => (
            <SongCard
              key={index}
              imageUrl={song.imageUrl}
              title={song.title}
              artist={song.artist}
            />
          ))}
        </Section>
        <Section title="Most Played Songs">
          {songs.map((song, index) => (
            <SongCard
              key={index}
              imageUrl={song.imageUrl}
              title={song.title}
              artist={song.artist}
            />
          ))}
        </Section>
      </div>
    </MainLayout>
  )
}

export default App
