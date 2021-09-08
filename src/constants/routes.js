import Game from "../components/Game/Game";
import Welcome from "../components/Welcome/Welcome";

export const routes = {
  welcome: () => ({
    path: "/",
    component: Welcome,
  }),
  game: () => ({
    path: "/game",
    component: Game,
  }),
};
