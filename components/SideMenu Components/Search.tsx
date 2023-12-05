import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {};
function Search({}: Props) {
  return (
    <div className=" text-white  bg-sideMenuBg rounded-full  flex p-2  space-x-4 ">
      <MagnifyingGlassIcon className="  opacity-30 w-6" />
      <input
        className=" opacity-50 outline-none   rounded-lg  bg-transparent"
        placeholder="Search"
      />
    </div>
  );
}
export default Search;
