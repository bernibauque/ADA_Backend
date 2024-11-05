// src/services/musicLogic.ts

import { Playlist } from "../models/Playlist";
import { Song, Genre } from "../models/Song";

const playlists: Playlist[] = []; // Arreglo para almacenar todas las playlists

// Crear una nueva playlist
export function createPlaylist(name: string): Playlist {
  const playlist = new Playlist(name);
  playlists.push(playlist);
  return playlist;
}

// Añadir una canción a una playlist específica
export function addSongToPlaylist(playlistName: string, song: Song): void {
  const playlist = playlists.find(p => p.name === playlistName);
  if (playlist) {
    playlist.addSong(song);
  } else {
    console.log("Playlist no encontrada.");
  }
}

// Eliminar una canción de una playlist
export function removeSongFromPlaylist(playlistName: string, songTitle: string): void {
  const playlist = playlists.find(p => p.name === playlistName);
  if (playlist) {
    playlist.removeSong(songTitle);
  } else {
    console.log("Playlist no encontrada.");
  }
}

// Listar todas las playlists creadas
export function listPlaylists(): string[] {
  return playlists.map(playlist => playlist.name);
}

// Obtener detalles de una playlist específica
export function getPlaylistDetails(playlistName: string): string[] | undefined {
  const playlist = playlists.find(p => p.name === playlistName);
  return playlist ? playlist.getPlaylistDetails() : undefined;
}

// Simulación de reproducción de una canción
export async function playSong(song: Song): Promise<void> {
    console.log(`Reproduciendo: ${song.title} por ${song.artist}...`);
    
    // Usamos un temporizador para simular la duración de la canción
    await new Promise(resolve => setTimeout(resolve, song.duration * 1000));
  
    console.log(`Canción finalizada: ${song.title}`);
  }
  