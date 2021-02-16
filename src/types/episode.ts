export interface EpisodeState {
  episodes: Episode[];
  loading: boolean;
  error: null | string;
  page: number | string;
  amountPages: number;
}

export enum EpisodeActionTypes {
  FETCH_EPISODES = "FETCH_EPISODES",
  FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS",
  FETCH_EPISODES_ERROR = "FETCH_EPISODES_ERROR",
  SET_EPISODES_PAGE = "SET_EPISODES_PAGE",
  SET_EPISODES_AMOUNT_PAGES = "SET_EPISODES_AMOUNT_PAGES",
}

export interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

interface FetchEpisodesAction {
  type: EpisodeActionTypes.FETCH_EPISODES;
}
interface FetchEpisodesSuccessAction {
  type: EpisodeActionTypes.FETCH_EPISODES_SUCCESS;
  payload: Episode[];
}
interface FetchEpisodesErrorAction {
  type: EpisodeActionTypes.FETCH_EPISODES_ERROR;
  payload: string;
}

interface SetEpisodesPage {
  type: EpisodeActionTypes.SET_EPISODES_PAGE;
  payload: number;
}

interface SetEpisodesAmountPages {
  type: EpisodeActionTypes.SET_EPISODES_AMOUNT_PAGES;
  payload: number;
}

export type EpisodeAction =
  | FetchEpisodesAction
  | FetchEpisodesSuccessAction
  | FetchEpisodesErrorAction
  | SetEpisodesPage
  | SetEpisodesAmountPages;
