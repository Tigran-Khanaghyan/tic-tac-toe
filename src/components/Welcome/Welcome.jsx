import Layout from "../Layout/Layout";
import WelcomeContent from "../WelcomeContent/WelcomeContent";

function Welcome() {
  return <Layout child={<WelcomeContent />} />;
}
export default Welcome;
