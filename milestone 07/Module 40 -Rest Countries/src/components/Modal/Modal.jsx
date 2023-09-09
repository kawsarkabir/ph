import React from "react";

const Modal = ({country, modalData}) => {
    // console.log(country);
    // const [name, population, flags, capital, currencies] = country
  return (
    <div>
      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
         <img src={modalData?.flags?.png} alt="" />
         <h1 className="card-title">
            {modalData?.name?.common}
         </h1>
          <p className="py-4">
            {modalData?.flags?.alt}
          </p>
          <p>Population: {modalData?.population}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
