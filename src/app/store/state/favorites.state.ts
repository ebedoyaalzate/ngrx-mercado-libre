export interface FavoritesState {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  isSelected?: boolean;
};

export const initialFavoriteState: FavoritesState[] = [];
