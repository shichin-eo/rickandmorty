import {
  EpisodeAction,
  EpisodeActionTypes,
  EpisodeState,
} from "../../types/episode";

const initialState: EpisodeState = {
  episodes: [],
  loading: false,
  error: null,
  page: 1,
  amountPages: 0,
};

export const episodesReducer = (
  state = initialState,
  action: EpisodeAction
): EpisodeState => {
  switch (action.type) {
    case EpisodeActionTypes.FETCH_EPISODES:
      return { ...state, loading: true, error: null };
    case EpisodeActionTypes.FETCH_EPISODES_SUCCESS:
      return { ...state, loading: false, episodes: action.payload };
    case EpisodeActionTypes.FETCH_EPISODES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case EpisodeActionTypes.SET_EPISODES_PAGE:
      return { ...state, page: action.payload };
    case EpisodeActionTypes.SET_EPISODES_AMOUNT_PAGES:
      return { ...state, amountPages: action.payload };
    default:
      return state;
  }
};
