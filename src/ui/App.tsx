import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Game from "./pages/Game";

export const ROUTES = {
  Landing: "/",
  Game: "/game",
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Landing} Component={Landing} />
        <Route path={ROUTES.Game} Component={Game} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
