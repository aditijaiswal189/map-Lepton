import {
  Bars3Icon,
  FolderOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function LayerHeader({ children, layerFolderOpen, handleLayerFolderOpen }) {
  return (
    <div className="absolute top-2 left-2 z-50 bg-primary bg-opacity-80 p-4 justify-between rounded-xl w-[50%]  md:w-[40%]  lg:w-[30%] xl:w-[20%] 2xl:w-[15%]">
      <div
        className={`py-2 flex justify-between ${
          layerFolderOpen ? "border-solid border-secondary border-b-[1px]" : ""
        }  `}
      >
        <div className="flex justify-between gap-2  ">
          <span>
            <FolderOpenIcon className="h-8 w-8" />
          </span>
          Layers
        </div>
        <button className="items-end" onClick={handleLayerFolderOpen}>
          {layerFolderOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>
      {children}
    </div>
  );
}

export default LayerHeader;
