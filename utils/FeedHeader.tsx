type Props = {};
function FeedHeader({}: Props) {
  return (
    <div className="  border">
      <h1 className="font-bold text-2xl p-4">Home</h1>
      <div className="flex justify-around mt-4  p-1 ">
        <div className="relative">
          <h2 className=" font-bold text-lg">For you</h2>
          <span className=" block w-full h-1 botom-0  bg-twitter absolute "></span>
        </div>
        <div>
          <h2 className="font-bold text-lg text-gray-400">Following</h2>
        </div>
      </div>
    </div>
  );
}
export default FeedHeader;
