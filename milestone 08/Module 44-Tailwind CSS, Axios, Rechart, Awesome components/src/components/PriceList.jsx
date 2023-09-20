import Price from "./Price";

const PriceList = () => {
  const priceOptions = [
    {
      id: 1,
      gym_name: "Strength Haven 1",
      price: 400,
      features: ["Access to cardio equipment", "Free weights area"],
    },
    {
      id: 2,
      gym_name: "Strength Haven 2",
      price: 870,
      features: ["Access to cardio equipment", "Free weights area"],
    },
    {
      id: 3,
      gym_name: "Strength Haven 3",
      price: 380,
      features: ["Access to cardio equipment", "Free weights area"],
    },
  ];

  return (
    <div>
        <h2 className="text-center text-4xl mt-5">My awesome PriceList</h2>
        <div className="grid grid-cols-3 gap-6 mt-5 px-5">
      {priceOptions.map((option) => (
        <Price key={option.id} option={option} />
      ))}
    </div>
    </div>
  );
};

export default PriceList;
