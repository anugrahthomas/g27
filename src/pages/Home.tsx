import LinkText from "../components/Home/LinkText";
import MainText from "../components/Home/MainText";
import Video from "../components/Home/Video";

const Home = () => {
  return (
    <div>
      <div className="fixed inset-0 h-screen w-screen overflow-hidden">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
        <MainText />
        <LinkText />
      </div>
    </div>
  );
};
export default Home;
