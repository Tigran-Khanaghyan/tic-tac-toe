import Layout from "../Layout/Layout";
import WelcomeContent from "../WelcomeContent/WelcomeContent";

export default function Welcome() {
  return <Layout child={<WelcomeContent />} />;
}
