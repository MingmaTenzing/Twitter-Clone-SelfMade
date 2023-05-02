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
    <div className="h-[100vh] w-[60px] md:w-1/6 lg:w-1/4 border p-2 overflow-hidden  flex flex-col items-center md:items-end  lg:items-baseline justify-between md:pr-4 lg:pl-20 ">
      <div className="space-y-8 flex flex-col items-center lg:items-start">
        <Image
          src={Twitterlogo}
          width={1687}
          height={1687}
          alt="Twitter Logo"
          className="w-12"
        />
        <div className="flex items-center space-x-4">
          <HomeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold ">Home</h2>
        </div>
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold">Search</h2>
        </div>

        <div className="flex items-center space-x-4">
          <BellIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold">
            Notifications
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <EnvelopeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold">Messages</h2>
        </div>

        <div className="flex items-center space-x-4">
          <BookmarkIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold">Bookmarks</h2>
        </div>
        <div className="flex items-center space-x-4">
          <UserIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold">Profile</h2>
        </div>
        <div className="flex items-center space-x-4">
          <EllipsisHorizontalCircleIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  font-semibold">More</h2>
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
        <div>

        <h2 className=" font-bold ">mingmatenzing sherpa</h2>
        <h3 className=" font-light text-gray-400 text-sm">@mingmatenzing</h3>
        </div>
      </div>
    </div>
  );
}
export default Nav;
