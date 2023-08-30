import { keyframes, styled } from "styled-components";
import { breakpoints } from "../helpers/media-query";

interface JokeSkeletonProps {
  filled?: boolean;
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const JokeSkeleton = styled.div<JokeSkeletonProps>`
  animation: ${pulse} 1.5s ease-in-out infinite;
  background: #ffffff;
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  width: ${(props) => (props.filled ? "49%" : "32%")};
  height: ${(props) => (props.filled ? "250px" : "150px")};
  flex-grow: 1;
  @media ${breakpoints.xl} {
    width: 49%;
    height: 200px;
  }
  @media ${breakpoints.md} {
    height: 100px;
  }
`;

export default JokeSkeleton;
