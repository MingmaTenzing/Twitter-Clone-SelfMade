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
import {  signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { logOut } from "../slices/userSlice";
import Link from "next/link";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
type Props = {};
function Nav({}: Props) {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  function signOutCurrentUser() {
    signOut(auth).then (() => {
      dispatch(logOut());
      router.push("/login");

    }).catch((error) => {
      console.log(error);
    })
  }

 

  return (
    <div className=" h-[100vh] sticky top-0 left-0  w-[50px] min-w-[50px] md:w-1/6 lg:w-1/4  border-r  border-b-[#d3d3d3]  p-2 px-4 overflow-hidden  flex flex-col items-center md:items-end  lg:items-baseline justify-between md:pr-4 lg:pl-20 ">
      <div className="space-y-4 flex flex-col items-center lg:items-start">
        <Image
          src={Twitterlogo}
          width={1687}
          height={1687}
          alt="Twitter Logo"
          className="w-12"
        />
        <Link href="/">
        
        <div  className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4 ">
          <HomeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg    "  >Home</h2>
        </div>
        </Link>
        <div className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <MagnifyingGlassIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Search</h2>
        </div>

        <div className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <BellIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Notifications</h2>
        </div>
        <div className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <EnvelopeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Messages</h2>
        </div>

        <div className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <BookmarkIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Bookmarks</h2>
        </div>
        <div onClick={signOutCurrentUser} className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <UserIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  " >
            Sign Out
          </h2>
        </div>
        <div className="flex items-center md:hover:bg-gray-200  cursor-pointer p-2 px-4 rounded-full space-x-4">
          <EllipsisHorizontalCircleIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">More</h2>
        </div>
        <Link href="#createpost">
          <PlusIcon className="w-8 lg:hidden" />
          
          <button className=" hidden text-lg lg:flex px-20 rounded-full font-bold py-4 text-white bg-[#1DA1F2] ">
            Tweet
          </button>
        </Link>
      </div>

      <div className="  lg:flex lg:items-center lg:space-x-3 ">
        {user?.photoURL ? (
          <LazyLoadImage
            src={user?.photoURL!}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full min-w-[40px] min-h-[40px] md:w-[60px] md:h-[60px] object-cover"
          />
        ) : (
          <div className=" px-3 py-[6px] bg-twitter text-white rounded-full">
            {" "}
            {user?.displayName[0]}{" "}
          </div>
        )}

        <div className="hidden lg:flex lg:flex-col">
          <div className="flex">
            <div className="w-[160px]   ">
              <h2 className=" font-bold  truncate ... ">{user?.displayName}</h2>
            </div>
            <CheckBadgeIcon className="w-6 text-twitter" />
          </div>

          <h3 className=" font-light text-gray-400 text-sm">{user?.email}</h3>
        </div>
      </div>
    </div>
  );
}
export default Nav;
