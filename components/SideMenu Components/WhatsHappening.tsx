type Props = {};
function WhatsHappening({}: Props) {
  return (
    <div className=" p-4 bg-sideMenuBg rounded-lg space-y-6">
      <h3 className=" font-bold text-xl">What&apos;s Happening</h3>
      <div className=" flex items-center  justify-between">
        <div>
          <p className=" text-[12px] opacity-30">Trending in Australia</p>
          <p className=" font-bold">#MingmaTenzingSherpa</p>
          <p className=" text-[12px] opacity-30">30k posts</p>
        </div>
        <p className=" font-bold  opacity-30">...</p>
      </div>
      <div className=" flex items-center  justify-between">
        <div>
          <p className=" text-[12px] opacity-30">Video games. Trending</p>
          <p className=" font-bold">#GTA6LEAKS</p>
          <p className=" text-[12px] opacity-30">14.4k posts</p>
        </div>
        <p className=" font-bold  opacity-30">...</p>
      </div>
      <div className=" flex items-center  justify-between">
        <div>
          <p className=" text-[12px] opacity-30">Tech. Trending</p>
          <p className=" font-bold">#OPENAI</p>
          <p className=" text-[12px] opacity-30">23k posts</p>
        </div>
        <p className=" font-bold  opacity-30">...</p>
      </div>
      <div className=" flex items-center  justify-between">
        <div>
          <p className=" text-[12px] opacity-30">Politics. Trending</p>
          <p className=" font-bold">#Donaltrump</p>
          <p className=" text-[12px] opacity-30">23k posts</p>
        </div>
        <p className=" font-bold  opacity-30">...</p>
      </div>
      <p className=" text-twitter text-sm ">Show More</p>
    </div>
  );
}
export default WhatsHappening;
