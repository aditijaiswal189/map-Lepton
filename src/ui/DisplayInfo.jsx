import { useEffect, useRef } from "react";
import FieldValue from "./FIeldValue";
import Overlay from "./Overlay";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
        className="w-40 absolute p-6 px-8 z-50 top-[50%]  rounded-xl translate-x-[-50%] translate-y-[-50%] left-[50%] bg-primary2 text-secondary2 min-w-[70%] md:min-w-[40%] xl:w-[30%] 2xl:w-[15%]"
      >
        <div className="flex justify-between mb-5 border-solid border-secondary border-b-[1px] pb-4">
          <h2 className="capitalize text-3xl font-bold  ">
            Information about {info.properties.Locality || info.properties.name}
          </h2>
          <button
            className="text-4xl rounded-md  "
            onClick={handleCloseDisplayModal}
          >
            <XMarkIcon className="h-8 w-8" />
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
