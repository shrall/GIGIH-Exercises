// SongCard.js
import React from 'react';

const SongCard = ({ imageUrl, title, artist }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
        <img src={imageUrl} className="object-cover object-center w-80 h-80" />
        <div
          className="flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all"
          aria-hidden="true"
        >
          <div className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
            Add to Playlist
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
        <h3>
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p>
          <i className="text-2xl fa-solid fa-fw fa-heart"></i>
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{artist}</p>
    </div>
  );
};

export default SongCard;
