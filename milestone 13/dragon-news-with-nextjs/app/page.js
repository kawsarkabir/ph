import LatestNews from "./components/ui/LatestNews";
import SideBar from "./components/ui/SideBar";

const Home = () => {
  return (
    <div className="flex mt-4 gap-x-10">
      <div className="w-2/3">
        <LatestNews></LatestNews>
      </div>
      <div className="w-1/3">
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default Home;
