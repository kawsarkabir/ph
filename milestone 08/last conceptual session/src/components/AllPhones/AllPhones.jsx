import React from "react";
import PhoneCard from "./PhoneCard";

const AllPhones = ({ phones }) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-8">All Phone</h1>
      <div className="grid grid-cols-4 gap-5 px-10">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default AllPhones;
