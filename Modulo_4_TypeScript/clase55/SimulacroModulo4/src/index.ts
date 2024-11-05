// src/index.ts

import { Song, Genre } from "./models/Song";
import { createPlaylist, addSongToPlaylist, listPlaylists, getPlaylistDetails, playSong } from "./service/musicLogic";

// Crear una canción de prueba
const song1 = new Song("Shape of You", "Ed Sheeran", 240, Genre.POP);
const song2 = new Song("Billie Jean", "Michael Jackson", 293, Genre.ROCK);

// Crear una playlist
const playlist = createPlaylist("Mi Playlist Favorita");

// Añadir canciones a la playlist
addSongToPlaylist("Mi Playlist Favorita", song1);
addSongToPlaylist("Mi Playlist Favorita", song2);

// Listar todas las playlists creadas
console.log("Playlists disponibles:", listPlaylists());

// Mostrar detalles de una playlist específica
console.log("Detalles de la Playlist:", getPlaylistDetails("Mi Playlist Favorita"));

// Reproducir una canción (esto simulará la reproducción con un temporizador)
(async () => {
  console.log("Iniciando reproducción de la canción...");
  await playSong(song1);
})();
