import type { FC } from "react";
import type { Joke as IJoke } from "../models/JokeModel";
import { styled } from "styled-components";
import { formatDate } from "../helpers/date";

interface JokeProps {
  joke: IJoke;
  filled?: boolean;
}

const Container = styled.div<JokeProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    props.filled ? "40px 40px 25px 40px" : "30px 30px 25px 30px"};
  background: #fff;
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  width: ${(props) => (props.filled ? "49%" : "32%")};
  flex-grow: 1;
`;

const Content = styled.p<JokeProps>`
  flex: 1;
  color: #282626;
  font-size: ${(props) => (props.filled ? "20px" : "16px")};
  font-weight: 400;
  line-height: 30px;
  margin-bottom: ${(props) => (props.filled ? "60px" : "30px")};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Id = styled.p`
  color: #767676;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

const Date = styled.p`
  color: #767676;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

const Joke: FC<JokeProps> = (props) => {
  const { joke } = props;
  return (
    <Container {...props}>
      <Content {...props}>{joke.value}</Content>
      <Row>
        <Id>{joke.id}</Id>
        <Date>{formatDate(joke.created_at)}</Date>
      </Row>
    </Container>
  );
};

export default Joke;
