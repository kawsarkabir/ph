const DetailsCard = ({ details }) => {
  const { id, image, phone_name, price, brand_name } = details || {};

  const handleAddToFavorites = () => {
    const arr = [];
    const favItem = JSON.parse(localStorage.getItem("fav"));

    if (!favItem) {
      arr.push(details);
      localStorage.setItem("fav", JSON.stringify(arr));
      alert("added");
    } else {
      const isExit = favItem.find((details) => details.id === id);
      if (!isExit) {
        arr.push(...favItem, details);
        localStorage.setItem("fav", JSON.stringify(arr));
        alert("added");
      } else {
        alert("already isExit !!");
      }
    }
  };

  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            ${price}
          </h4>

          <a className="inline-block" href="#">
            <button
              onClick={handleAddToFavorites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Favarate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
