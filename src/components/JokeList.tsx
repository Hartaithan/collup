import { useState, type FC, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector } from "../hooks/useStore";
import {
  selectJokesListPagination,
  selectJokesLoading,
} from "../store/jokes/selectors";
import Joke from "./Joke";
import JokeSkeleton from "./JokeSkeleton";
import { useIntersection } from "../hooks/useIntersection";
import { breakpoints } from "../helpers/media-query";

const loaders = Array.from(Array(5).keys());

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 60px;
  gap: 20px;
  @media ${breakpoints.lg} {
    margin-top: 60px;
    margin-bottom: 30px;
  }
`;

const Indicator = styled.div`
  height: 1px;
  width: 100%;
  visibility: hidden;
`;

const JokeList: FC = () => {
  const [page, setPage] = useState<number>(1);
  const isLoading = useSelector(selectJokesLoading);
  const list = useSelector((state) => selectJokesListPagination(state, page));
  const { ref, entry } = useIntersection({
    root: document,
    threshold: 1,
  });

  useEffect(() => {
    if (!entry?.isIntersecting) return;
    setPage((prev) => prev + 1);
  }, [entry]);

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
      <Indicator ref={list.length > 0 ? ref : undefined} />
    </Container>
  );
};

export default JokeList;
