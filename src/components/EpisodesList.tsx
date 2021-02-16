import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Character } from "../types/character";
import Button from "./Button";
import Flex from "./Flex";
import Header from "./Header";
import NavBar from "./NavBar";
import Profile from "./Profile";

interface EpisodeListI {
  filters?: string[];
}

interface EpisodeRouteParams {
  id: string;
}

const EpisodesList: React.FC<EpisodeListI> = (props) => {
  const { id } = useParams<EpisodeRouteParams>();
  const history = useHistory();
  const { filters } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState<Character>({
    created: "",
    episode: [],
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: "" },
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
    url: "",
  });
  const { episodes, error, loading, amountPages } = useTypedSelector(
    (state) => state.episodes
  );
  const { characters } = useTypedSelector((state) => state.characters);
  const { fetchEpisodes, setEpisodesPage } = useActions();

  const currentCharacterHandler = (char: Character) => {
    setCurrentCharacter(char);
  };
  const pages = Array.from({ length: amountPages + 1 }, (v, k) => k + 1);

  const profileHandler = (char: Character) => {
    setIsOpen(true);
    currentCharacterHandler(char);
  };

  useEffect(() => {
    fetchEpisodes(id);
  }, [fetchEpisodes, id]);

  const setEpisodeCharacters = (arr: string[]): Character[] => {
    let result: Character[] | undefined = [];
    for (let elem of arr) {
      const ind = characters.filter((char) => {
        return char["url"] === elem;
      });
      result.push(ind[0]);
    }
    if (filters?.length) {
      for (let filter of filters) {
        result = result.filter((char) => {
          return char["status"] === filter;
        });
      }
    }
    return result;
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return (
      <Flex justify="center" align="center">
        <Flex fontsize="2vw" width="40%">
          {error}
        </Flex>
        <Button
          width="5vh"
          height="100%"
          icon="home"
          onClick={() => {
            history.push("/");
            setEpisodesPage(1);
          }}
        >
          Back
        </Button>
      </Flex>
    );
  }
  return (
    <div>
      <NavBar pages={pages} currentPage={id} />
      <Profile
        char={currentCharacter}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Profile>
      <Flex direction="column" radius="5px" border={true}>
        <Header />
        {episodes.map((episode) => (
          <Flex
            key={episode.id}
            direction="row"
            justify="flex-start"
            margin="5px 0 5px 0"
          >
            <Flex
              width="10%"
              height="auto"
              justify="center"
              align="center"
              margin="5px"
              border={true}
              radius="5px"
              fontsize="1vw"
            >
              {episode.name}
            </Flex>
            <Flex
              direction="row"
              width="90%"
              color="green"
              wrap="wrap"
              justify="flex-start"
            >
              {setEpisodeCharacters(episode.characters)?.map((elem) => {
                return (
                  <Flex
                    key={elem["id"]}
                    width="15%"
                    height="7vh"
                    wrap="wrap"
                    margin="5px"
                    border={true}
                    justify="space-around"
                    align="center"
                    radius="10px"
                  >
                    <Flex
                      height="100%"
                      width="70%"
                      justify="center"
                      align="center"
                    >
                      {elem.name}
                    </Flex>
                    <Flex width="10%">
                      <Button
                        icon="link"
                        height="100%"
                        width="10%"
                        onClick={() => {
                          history.push(`/character/${elem.id}`);
                        }}
                      >
                        Go
                      </Button>
                    </Flex>
                    <Flex width="10%">
                      <Button
                        height="100%"
                        width="10%"
                        icon="profile"
                        onClick={() => profileHandler(elem)}
                      >
                        Open profile
                      </Button>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <NavBar pages={pages} currentPage={id} />
    </div>
  );
};

export default EpisodesList;
