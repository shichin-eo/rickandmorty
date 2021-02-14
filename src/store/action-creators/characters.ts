import axios from "axios";
import { Dispatch } from "redux";
import { CharacterAction, CharacterActionTypes } from "../../types/character";

export const fetchCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS });
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      });
    } catch {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: "Something is wrong with getting episodes...",
      });
    }
  };
};
