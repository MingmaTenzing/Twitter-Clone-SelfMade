import Image from "next/image";
import MingmaTenzing from "../../assests/MingmaTenzing.jpg";
import Primegan from "../../assests/Primegan.jpg";
import elonmusk from "../../assests/Elon Musk.jpg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
type Props = {};
function Whotofollow({}: Props) {
  return (
    <div className=" bg-sideMenuBg rounded-lg space-y-2 ">
      <h3 className=" font-bold text-xl p-4">Who to follow</h3>
      <div className=" py-2 space-y-2">
        <div className=" flex justify-between px-2 py-2  hover:bg-white  hover:bg-opacity-5 cursor-pointer">
          <div className="  flex space-x-3 items-center">
            <Image
              className=" w-10 h-10 rounded-full object-cover"
              src={MingmaTenzing}
              alt="To follow People"
            />
            <div className="">
              <div className=" flex space-x-1 items-center">
                <p className=" font-semibold">Mingma Tenzing</p>
                <CheckBadgeIcon className=" w-4 text-twitter" />
              </div>
              <p className=" text-sm opacity-30">@mingmasherpa689</p>
            </div>
          </div>
          <div className=" text-black bg-white  font-semibold cursor-pointer text-center flex justify-center items-center px-4 rounded-full ">
            <p className=" text-gray-800 text-sm">Follow</p>
          </div>
        </div>
        <div className=" flex justify-between px-2 py-2  hover:bg-white  hover:bg-opacity-5 cursor-pointer">
          <div className="  flex space-x-3 items-center">
            <Image
              className=" w-10 h-10 rounded-full object-cover"
              src={elonmusk}
              alt="To follow People"
            />
            <div className="">
              <div className=" flex space-x-1 items-center">
                <p className=" font-semibold">Elon Musk</p>
                <CheckBadgeIcon className=" w-4 text-twitter" />
              </div>
              <p className=" text-sm opacity-30">@elonmusk</p>
            </div>
          </div>
          <div className=" text-black bg-white  font-semibold cursor-pointer text-center flex justify-center items-center px-4 rounded-full ">
            <p className=" text-gray-800 text-sm">Follow</p>
          </div>
        </div>
        <div className=" flex justify-between px-2 py-2  hover:bg-white  hover:bg-opacity-5 cursor-pointer">
          <div className="  flex space-x-3 items-center">
            <Image
              className=" w-10 h-10 rounded-full object-cover"
              src={Primegan}
              alt="To follow People"
            />
            <div className="">
              <div className=" flex space-x-1 items-center">
                <p className=" font-semibold">The Primegan</p>
                <CheckBadgeIcon className=" w-4 text-twitter" />
              </div>
              <p className=" text-sm opacity-30">@theprimegan</p>
            </div>
          </div>
          <div className=" text-black bg-white  font-semibold cursor-pointer text-center flex justify-center items-center px-4 rounded-full ">
            <p className=" text-gray-800 text-sm">Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Whotofollow;
