/* eslint-disable import/no-anonymous-default-export */
import * as EpisodesActionCreators from "./episodes";
import * as CharactersActionCreators from "./characters";

export default {
  ...EpisodesActionCreators,
  ...CharactersActionCreators,
};
