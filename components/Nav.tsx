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
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import profile from "../assests/profile.jpg";
import { useEffect, useState } from "react";
import { user } from "@/pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";
type Props = {};
function Nav({}: Props) {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<user>();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
          uid: user.uid || ""
        });
      }
      else {
        router.push('/login')
      }
    })

  }, [])


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
        {
          currentUser?.photoURL? ( <img
            src={currentUser?.photoURL!}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full md:w-[60px]"
          />) : (<div className=" px-3 py-2 bg-twitter text-white rounded-full" > {currentUser?.displayName[0]} </div>)
        }
       
        <div className="hidden lg:flex lg:flex-col">
          <div className="flex">
            <div className="w-[160px]   ">
              
        <h2 className=" font-bold  truncate ... ">{currentUser?.displayName}</h2>
            </div>
        <CheckBadgeIcon className="w-6 text-twitter" />

          </div>


        <h3 className=" font-light text-gray-400 text-sm">@{currentUser?.email}</h3>
        </div>
      </div>
    </div>
  );
}
export default Nav;
