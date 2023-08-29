import type { ChangeEventHandler, FC } from "react";
import { styled } from "styled-components";
import useDebounce from "../hooks/useDebounce";
import { useDispatch, useSelector } from "../hooks/useStore";
import { jokesSearch } from "../store/jokes/actions";
import { selectJokesTotal } from "../store/jokes/selectors";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Message = styled.p`
  position: absolute;
  top: 100%;
  margin-top: 20px;
  min-width: 626px;
  color: #282626;
  font-size: 16px;
  font-weight: 400;
  font-family: "Montserrat";
  padding-left: 36px;
`;

const SearchInput: FC = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectJokesTotal);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = useDebounce(
    (e) => {
      const value = e.target.value;
      if (value.trim().length < 3) return;
      dispatch(jokesSearch(value));
    },
    500,
  );

  return (
    <Wrapper>
      <Input placeholder="Search..." onChange={handleSearchChange} />
      {total > 0 && <Message>Found jokes: {total}</Message>}
    </Wrapper>
  );
};

export default SearchInput;
