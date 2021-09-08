import GameContent from "../GameContent/GameContent";
import GameMode from "../GameMode/GameMode";
import Layout from "../Layout/Layout";

export default function Game() {
  return <Layout child={<GameContent />} left={<GameMode/>}/>;
}
