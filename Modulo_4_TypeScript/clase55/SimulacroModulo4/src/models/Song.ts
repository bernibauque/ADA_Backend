// src/models/Song.ts

// Enum para los géneros de las canciones
export enum Genre {
    POP = "Pop",
    ROCK = "Rock",
    JAZZ = "Jazz",
    HIPHOP = "Hip-Hop",
    CLASSICAL = "Classical"
  }
  
  // Clase Song
  export class Song {
    // Propiedades de la clase Song
    title: string;
    artist: string;
    duration: number; // duración en segundos
    genre: Genre;
  
    constructor(title: string, artist: string, duration: number, genre: Genre) {
      this.title = title;
      this.artist = artist;
      this.duration = duration;
      this.genre = genre;
    }
  
    // Método para mostrar detalles de la canción
    getDetails(): string {
      return `${this.title} by ${this.artist} - ${this.duration} sec [${this.genre}]`;
    }
  }
  