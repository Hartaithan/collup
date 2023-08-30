import type { FC } from "react";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import JokeList from "./components/JokeList";

const App: FC = () => {
  return (
    <Container>
      <SearchInput />
      <JokeList />
    </Container>
  );
};

export default App;
