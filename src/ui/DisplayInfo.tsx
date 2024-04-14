import { useEffect, useRef } from "react";
import FieldValue from "./FIeldValue";
import Overlay from "./Overlay";

function DisplayInfo({ handleCloseDisplayModal, info }) {
  const myRef = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (myRef.current && !myRef.current.contains(e.target)) {
          handleCloseDisplayModal();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [handleCloseDisplayModal]
  );

  return (
    <Overlay>
      <div
        ref={myRef}
        className="w-40 absolute p-6 px-8 z-50 top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] bg-white min-w-[70%] md:min-w-[50%] "
      >
        <div className="flex justify-between mb-3">
          <h2 className="capitalize text-3xl font-bold ">
            Information about {info.properties.Locality || info.properties.name}
          </h2>
          <button
            className="text-4xl bg-gray-100 px-4 py-2 rounded-md  "
            onClick={handleCloseDisplayModal}
          >
            &times;
          </button>
        </div>

        <div>
          <FieldValue displayObject={Object.entries(info.properties)} />
        </div>
      </div>
    </Overlay>
  );
}

export default DisplayInfo;
