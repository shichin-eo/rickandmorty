export interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: null | string;
  page: number;
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = "FETCH_CHARACTERS",
  FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
  FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR",
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: CharacterLocation;
  name: string;
  origin: CharacterLocation;
  species: string;
  status: string;
  type: string;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS;
}
interface FetchCharactersSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: Character[];
}
interface FetchCharactersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}

export type CharacterAction =
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersErrorAction;
