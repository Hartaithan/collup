import { styled } from "styled-components";
import { breakpoints } from "../helpers/media-query";

const Container = styled.main`
  display: block;
  min-height: 100%;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 128px;
  @media ${breakpoints.xxl} {
    max-width: 90%;
  }
  @media ${breakpoints.lg} {
    padding-top: 32px;
  }
`;

export default Container;
