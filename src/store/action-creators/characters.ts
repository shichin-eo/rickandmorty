import axios from "axios";
import { Dispatch } from "redux";
import { CharacterAction, CharacterActionTypes } from "../../types/character";
import api from "../../api/api";

export const fetchCharacters = (id: string | number) => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS });
      const response = await axios.get(`${api.character}${id}`);

      dispatch({
        type: CharacterActionTypes.FETCH_CHAR_SUCCESS,
        payload: response.data,
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
