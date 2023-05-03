import Image from "next/image";
import Twitterlogo from "../assests/twitter.png";
import {
  BeakerIcon,
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import profile from "../assests/profile.jpg";
type Props = {};
function Nav({}: Props) {
  return (
    <div className=" h-[100vh] sticky top-0 left-0  w-[60px] md:w-1/6 lg:w-1/4  border-r  border-b-[#d3d3d3]  p-2 px-4 overflow-hidden  flex flex-col items-center md:items-end  lg:items-baseline justify-between md:pr-4 lg:pl-20 ">
      <div className="space-y-4 flex flex-col items-center lg:items-start">
        <Image
          src={Twitterlogo}
          width={1687}
          height={1687}
          alt="Twitter Logo"
          className="w-12"
        />
        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4 ">
          <HomeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg    ">Home</h2>
        </div>
        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <MagnifyingGlassIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Search</h2>
        </div>

        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <BellIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">
            Notifications
          </h2>
        </div>
        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <EnvelopeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Messages</h2>
        </div>

        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <BookmarkIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Bookmarks</h2>
        </div>
        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <UserIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Profile</h2>
        </div>
        <div className="flex items-center hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <EllipsisHorizontalCircleIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">More</h2>
        </div>
        <div className="">
          <PlusIcon className="w-8 lg:hidden" />
          <button className=" hidden text-lg lg:flex px-20 rounded-full font-bold py-4 text-white bg-[#1DA1F2] ">
            Tweet
          </button>
        </div>
      </div>

      <div className="  lg:flex lg:items-center lg:space-x-3 ">
        <Image
          src={profile}
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full md:w-[60px]"
        />
        <div className="hidden lg:flex lg:flex-col">

        <h2 className=" font-bold  ">mingmatenzing sherpa</h2>
        <h3 className=" font-light text-gray-400 text-sm">@mingmatenzing</h3>
        </div>
      </div>
    </div>
  );
}
export default Nav;
