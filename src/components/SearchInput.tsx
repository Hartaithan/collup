import type { ChangeEventHandler, FC } from "react";
import { useRef } from "react";
import { styled } from "styled-components";
import useDebounce from "../hooks/useDebounce";
import { useDispatch, useSelector } from "../hooks/useStore";
import { jokesSearch, resetList, setLoading } from "../store/jokes/actions";
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
  let isLoading = useRef<boolean>(false).current;

  const debouncedSearch = useDebounce((value: string) => {
    if (value.length < 3) return;
    dispatch(jokesSearch(value))
      .unwrap()
      .finally(() => {
        isLoading = false;
      });
  }, 700);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.trim();
    // при изменении значения ставится флаг о загрузке данных, для предотвращения лишних диспатчей
    if (!isLoading) {
      isLoading = true;
      dispatch(setLoading(true));
    }
    // при очистке значения ипута сбрасывается стейт
    if (value.length === 0) {
      dispatch(resetList());
      return;
    }
    // дебаунс запроса на поиск, для предотвращения лишних запросов на апи
    debouncedSearch(value);
  };

  return (
    <Wrapper>
      <Input placeholder="Search..." onChange={handleSearchChange} autoFocus />
      {total > 0 && <Message>Found jokes: {total}</Message>}
    </Wrapper>
  );
};

export default SearchInput;
