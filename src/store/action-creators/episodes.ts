import axios from "axios";
import { Dispatch } from "redux";
import { CharacterAction, CharacterActionTypes } from "../../types/character";
import { EpisodeAction, EpisodeActionTypes } from "../../types/episode";

export const fetchEpisodes = (page = 1) => {
  return async (dispatch: Dispatch<EpisodeAction | CharacterAction>) => {
    try {
      dispatch({ type: EpisodeActionTypes.FETCH_EPISODES });
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode",
        {
          params: { page: page },
        }
      );
      dispatch({
        type: EpisodeActionTypes.SET_EPISODES_AMOUNT_PAGES,
        payload: response.data.info.pages,
      });
      const episodes = response.data.results;
      const characters: any[] = [];
      const REGEXP = /[^/]+$/;
      episodes.forEach((episode: any) => {
        episode.characters.forEach((char: any) => {
          if (!characters.includes(char)) {
            let charID = REGEXP.exec(char);
            characters.push(charID?.[0]);
          }
        });
      });
      //! get multiple characters
      const chars = await axios.get(
        `https://rickandmortyapi.com/api/character/${characters.join(",")}`
      );
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: chars.data,
      });
      //!
      dispatch({
        type: EpisodeActionTypes.FETCH_EPISODES_SUCCESS,
        payload: response.data.results,
      });
    } catch {
      dispatch({
        type: EpisodeActionTypes.FETCH_EPISODES_ERROR,
        payload: "Something is wrong with getting episodes...",
      });
    }
  };
};

export function setEpisodesPage(page: number): EpisodeAction {
  return { type: EpisodeActionTypes.SET_EPISODES_PAGE, payload: page };
}
