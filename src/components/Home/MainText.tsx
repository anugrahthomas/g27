import Video from "./Video";

const MainText = () => {
  return (
    <div className="p-2 mt-2 text-[10vw] font-[lau-300] uppercase text-center text-white leading-[8vw]">
      <div >The spark for</div>
      <div className="flex items-center justify-center">
        all
        <div className="h-[8vw] w-[18vw] -mt-4 mb-3 rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div>creative</div>
    </div>
  );
};
export default MainText;
