import GameContent from "../GameContent/GameContent";
import GameMode from "../GameMode/GameMode";
import GameInfo from "../GameInfo/GameInfo";
import Layout from "../Layout/Layout";

export default function Game() {
  return <Layout child={<GameContent />} left={<GameMode/>} right={<GameInfo/>}/>;
}
