import type { FC } from "react";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";

const App: FC = () => {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
};

export default App;
