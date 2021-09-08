import GameContent from "../GameContent/GameContent";
import Layout from "../Layout/Layout";

export default function Game() {
  return <Layout child={<GameContent />} />;
}
