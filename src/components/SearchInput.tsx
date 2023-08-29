import type { FC } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
  min-width: 626px;
  filter: drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.2));
  color: #656ec2;
  padding: 19px 36px 21px 36px;
  font-size: 20px;
  font-weight: 700;
`;

const SearchInput: FC = () => {
  return (
    <Wrapper>
      <Input placeholder="Search..." />
    </Wrapper>
  );
};

export default SearchInput;
