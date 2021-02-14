export interface CharacterState {
  characters: any[];
  loading: boolean;
  error: null | string;
  page: number;
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = "FETCH_CHARACTERS",
  FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
  FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR",
}

interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS;
}
interface FetchCharactersSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: any;
}
interface FetchCharactersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}

export type CharacterAction =
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersErrorAction;
