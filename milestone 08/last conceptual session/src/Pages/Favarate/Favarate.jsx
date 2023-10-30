import { useEffect, useState } from "react";

import DetailsCard from "../../components/AllPhones/DetailsCard";

const Favarate = () => {
  const [dataLength, setDataLength] = useState(4);
  const [fav, setFav] = useState([]);
  const [noFound, setFound] = useState(false);
  const favItem = JSON.parse(localStorage.getItem("fav"));
  useEffect(() => {
    if (favItem) {
      setFav(favItem);
    } else {
      setFound("no data found");
    }
  }, []);
  
  return (
    <div>
      {noFound ? (
        <p className="flex min-h-screen justify-center items-center">
          {noFound}
        </p>
      ) : (
        <div>
          {fav.slice(0, dataLength).map((phone) => (
            <DetailsCard key={phone.id} details={phone} />
          ))}
        </div>
      )}
      <button
        onClick={() => setDataLength(fav.length)}
        className="btn btn-primary text-center my-5"
      >
        show all
      </button>
    </div>
  );
};

export default Favarate;
