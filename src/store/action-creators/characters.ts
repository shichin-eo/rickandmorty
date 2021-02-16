import axios from "axios";
import { Dispatch } from "redux";
import { CharacterAction, CharacterActionTypes } from "../../types/character";
import api from "../../api/api";

export const fetchCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS });
      const response = await axios.get(api.character);

      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      });
    } catch (e) {
      console.log("Error with fetching characters:", e);
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: "Something is wrong with getting episodes...",
      });
    }
  };
};
