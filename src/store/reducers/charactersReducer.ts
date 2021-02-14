import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from "../../types/character";

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
  page: 1,
};

export const charactersReducer = (
  state = initialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { ...state, loading: true };
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      };
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
