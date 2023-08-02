import React, { useEffect, useState } from "react";
import spotifyLogo from "../assets/logo-spotify.png";
import axios from "axios";

export default function Login() {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchAlbums = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "album",
      },
    });
    setAlbums(data.albums.items);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        {!token && (
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src={spotifyLogo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
        )}

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
              className="flex w-full justify-center rounded-md border border-transparent bg-spotify-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-spotify-green focus:ring-offset-2"
            >
              Sign in
            </a>
          ) : (
            <button
              onClick={() => {
                logout();
              }}
              className="flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign out
            </button>
          )}
          <div className="w-full sm:max-w-xs mx-auto my-4">
            {token && (
              <form
                onSubmit={searchAlbums}
                className="relative flex flex-col justify-center"
              >
                <input
                  onChange={(e) => setSearchKey(e.target.value)}
                  id="search"
                  name="search"
                  className="block w-full rounded-md border border-transparent bg-gray-700 py-2 px-3 text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-white sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
                <button
                  type="submit"
                  className="bg-spotify-green text-white rounded-lg px-3 py-2 my-2"
                >
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-8 sm:mx-auto w-full">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-8 xl:gap-x-8"
          >
            {albums.map((album) => (
              <li key={album.id} className="relative">
                <a
                  href={album.external_urls?.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="group cursor-pointer aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                >
                  <img
                    src={album.images?.[0].url}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                </a>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {album.name}
                </p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">
                  {album.artists?.[0].name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
