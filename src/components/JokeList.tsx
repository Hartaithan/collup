import type { FC } from "react";
import { styled } from "styled-components";
import { useSelector } from "../hooks/useStore";
import { selectJokes } from "../store/jokes/selectors";
import Joke from "./Joke";
import JokeSkeleton from "./JokeSkeleton";

const loaders = Array.from(Array(5).keys());

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 60px;
  gap: 20px;
`;

const JokeList: FC = () => {
  const { list, isLoading } = useSelector(selectJokes);

  if (isLoading) {
    return (
      <Container>
        {loaders.map((item, index) => {
          const filled = index < 2;
          return <JokeSkeleton key={item} filled={filled} />;
        })}
      </Container>
    );
  }

  if (list === null) return null;

  return (
    <Container>
      {list.map((joke, index) => {
        const filled = index < 2;
        return <Joke key={joke.id} joke={joke} filled={filled} />;
      })}
    </Container>
  );
};

export default JokeList;
