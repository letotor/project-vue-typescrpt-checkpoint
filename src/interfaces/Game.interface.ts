import type { GenreInterface } from "./Genre.interface";

export interface GameInterface {
  id: number;
  slug: string;
  name: string;
  released?: string;
  background_image?: string;
  rating: number;
  genres?: GenreInterface[];
}
