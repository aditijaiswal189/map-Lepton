import {
  BuildingOffice2Icon,
  EyeIcon,
  EyeSlashIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

function LayerButton({
  gurgaonShow,
  airportShow,
  handleAirport,
  handleGurgaon,
}) {
  return (
    <>
      <button
        className="py-3 mt-5 w-[100%]
           hover:bg-primary2 focus:outline-none  font-medium rounded-lg text-lg pl-5 pr-2  dark:bg-primary2 dark:hover:bg-primary2 dark:focus:ring-primary2 dark:border-primary2 transition-all hover:rounded-xl"
        onClick={handleGurgaon}
      >
        <div className="flex justify-between w-[100%]  ">
          <div className="flex gap-2">
            -
            <span>
              <BuildingOffice2Icon className="h-8 w-8" />
            </span>
            Gurgaon
          </div>
          <div>
            {gurgaonShow ? (
              <EyeIcon className="h-8 w-8" />
            ) : (
              <EyeSlashIcon className="h-8 w-8" />
            )}
          </div>
        </div>
      </button>
      <button
        className="flex py-3  w-[100%]
           hover:bg-primary2 focus:outline-none  font-medium rounded-lg text-lg pl-5 pr-2  dark:bg-primary2 dark:hover:bg-primary2 dark:focus:ring-primary2 dark:border-primary2 transition-all"
        onClick={handleAirport}
      >
        <div className="flex justify-between  w-[100%]">
          <div className="flex gap-2">
            -
            <span>
              <PaperAirplaneIcon className="h-8 w-8" />
            </span>
            Airports
          </div>
        </div>
        <div>
          {airportShow ? (
            <EyeIcon className="h-8 w-8" />
          ) : (
            <EyeSlashIcon className="h-8 w-8" />
          )}
        </div>
      </button>
    </>
  );
}

export default LayerButton;
