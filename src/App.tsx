import type { FC } from "react";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import { useSelector } from "./hooks/useStore";
import { selectSearch } from "./store/jokes";

const App: FC = () => {
  const search = useSelector(selectSearch);

  return (
    <Container>
      <SearchInput />
      <p>{search}</p>
    </Container>
  );
};

export default App;
