import { Children, cloneElement, useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const ModalContext = createContext();

function Modal({ children }) {
  const [opensModal, setOpensModal] = useState("");

  function handleOpenModal(opens) {
    setOpensModal(opens);
  }

  function handleCloseModal() {
    setOpensModal("");
  }

  return (
    <ModalContext.Provider
      value={{ opensModal, handleCloseModal, handleOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Button({ opens }) {
  const { handleOpenModal } = useContext(ModalContext);

  return <button onClick={() => handleOpenModal(opens)}>Open here</button>;
}

function Window({ children, name }) {
  const { handleCloseModal, opensModal } = useContext(ModalContext);
  if (opensModal !== name) return null;
  return (
    <div className="absolute w-full  min-h-screen top-0 left-0 bottom-0 z-50 bg-backdrop  ">
      <div className="relative h-full">
        {/* <div className="w-40 absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] bg-white "> */}
        {/* <button className="text-white" onClick={handleCloseModal}>
            close it
          </button>
          opened window
        </div> */}
        {cloneElement(children, { handleCloseModal })}
      </div>
    </div>
  );
}

Modal.Button = Button;
Modal.Window = Window;
export default Modal;
