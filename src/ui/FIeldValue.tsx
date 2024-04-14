function FieldValue({ displayObject }) {
  return displayObject.map((item, index) => (
    <div key={index} className="flex justify-between text-2xl capitalize">
      <p>{item[0]}</p>

      {item[0].toLowerCase() === "wikipedia" ? (
        <p className="truncate w-32 lowercase">
          {" "}
          <a target="_blank" href={item[1]}>
            {item[1]}
          </a>
        </p>
      ) : (
        <p>{item[1]}</p>
      )}
    </div>
  ));
}

export default FieldValue;
