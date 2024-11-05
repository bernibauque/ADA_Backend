// src/models/Playlist.ts

import { Song } from "./Song";

export class Playlist {
  name: string;            // nombre de la playlist
  songs: Song[] = [];       // array de canciones en la playlist

  constructor(name: string) {
    this.name = name;
  }

  // Método para añadir una canción
  addSong(song: Song): void {
    this.songs.push(song);
  }

  // Método para eliminar una canción
  removeSong(songTitle: string): void {
    this.songs = this.songs.filter(song => song.title !== songTitle);
  }

  // Mostrar todos los detalles de las canciones en la playlist
  getPlaylistDetails(): string[] {
    return this.songs.map(song => song.getDetails());
  }
}
