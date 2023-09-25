import { useLoaderData } from "react-router-dom";
import AllPhones from "../../components/AllPhones/AllPhones";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);

  return (
    <div>
      <Banner />
      <AllPhones phones={phones}/>

    </div>
  );
};

export default Home;
