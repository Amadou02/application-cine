import {configureStore, createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favories',
  initialState: [],
  reducers: {
    // réçoit un état et une action qui seront réduits en un nouvel état
    toggleFavorite: (state, action) => {
      // le film est déjà dans le favoris
      if (state.find(element => element.id === action.payload.id)) {
        // On retourne un nouveau table de favoris sans l'élément
        return state.filter(element => element.id !== action.payload.id);
      }
      // On ajoute le film aux favoris
      state.push(action.payload);
    },
  },
});

// on export le créateur d'actions crée par reactjs/toolkit pour nous lorsqu'on a crée le slice

export const {toggleFavorite} = favoritesSlice.actions;
// On configure le store avec la clés favorites pour notre slice et en valeur le reducer de celui-ci.
export const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
});
