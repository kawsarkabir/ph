import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const PhoneDetails = () => {
  const [details, setDetails] = useState({});
  const phones = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findPhone = phones?.find((details) => details.id === id);
    setDetails(findPhone);
  }, [id, phones]);
 
  return (
    <div className="my-10 container mx-auto px-10">
      <DetailsCard details={details} />
    </div>
  );
};

export default PhoneDetails;
