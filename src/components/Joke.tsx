import type { FC } from "react";
import type { Joke as IJoke } from "../models/JokeModel";
import { styled } from "styled-components";
import { formatDate } from "../helpers/date";
import { breakpoints } from "../helpers/media-query";

interface JokeProps {
  joke: IJoke;
  filled?: boolean;
}

interface StyledProps {
  $filled: boolean;
}

const Container = styled.a<StyledProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ $filled }) =>
    $filled ? "40px 40px 25px 40px" : "30px 30px 25px 30px"};
  background: #fff;
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  width: ${({ $filled }) => ($filled ? "49%" : "32%")};
  flex-grow: 1;
  color: unset;
  text-decoration: unset;
  @media ${breakpoints.xl} {
    padding: 30px 30px 25px 30px;
    width: 49%;
  }
  @media ${breakpoints.md} {
    padding: 20px;
  }
`;

const Content = styled.p<StyledProps>`
  flex: 1;
  color: #282626;
  font-size: ${({ $filled }) => ($filled ? "20px" : "16px")};
  font-weight: 400;
  line-height: 30px;
  margin-bottom: ${({ $filled }) => ($filled ? "60px" : "30px")};
  word-wrap: break-word;
  @media ${breakpoints.xl} {
    font-size: 16px;
    margin-bottom: 30px;
  }
  @media ${breakpoints.md} {
    font-size: 14px;
    margin-bottom: 25px;
  }
  @media ${breakpoints.xs} {
    font-size: 12px;
    margin-bottom: 15px;
  }
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
  @media ${breakpoints.md} {
    font-size: 12px;
  }
  @media ${breakpoints.xs} {
    font-size: 10px;
  }
`;

const Date = styled.p`
  color: #767676;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  @media ${breakpoints.md} {
    font-size: 12px;
  }
  @media ${breakpoints.xs} {
    font-size: 10px;
  }
`;

const Joke: FC<JokeProps> = (props) => {
  const { joke, filled = false } = props;

  return (
    <Container href={joke.url} target="__blank" $filled={filled}>
      <Content $filled={filled}>{joke.value}</Content>
      <Row>
        <Id>{joke.id}</Id>
        <Date>{formatDate(joke.created_at)}</Date>
      </Row>
    </Container>
  );
};

export default Joke;
