function Overlay({ children }) {
  return (
    <div className="absolute w-full  min-h-screen top-0 left-0 bottom-0 z-50 bg-backdrop  ">
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default Overlay;
