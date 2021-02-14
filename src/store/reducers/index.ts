import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { episodesReducer } from "./episodesReducer";

export const rootReducer = combineReducers({
  episodes: episodesReducer,
  characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
