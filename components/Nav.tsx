import Image from "next/image";
import Twitterlogo from "../assests/X_logo_2023_(white).png";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { logOut } from "../slices/userSlice";
import Link from "next/link";
type Props = {};
function Nav({}: Props) {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  function signOutCurrentUser() {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        router.push("/login");
      })
      .catch((error) => {});
  }

  return (
    <div className=" bg-black text-white h-[100vh] sticky top-0 left-0   border-r  border-b-[#242424]  overflow-hidden  flex flex-col py-4 items-center md:items-end  lg:items-baseline justify-between md:pr-4 lg:pl-20 ">
      <div className=" space-y-2 flex flex-col  items-start ">
        <Image
          src={Twitterlogo}
          width={1687}
          height={1687}
          alt="Twitter Logo"
          className="w-10  md:ml-6 ml-2 "
        />
        <Link href="/">
          <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4 ">
            <HomeIcon className="w-8" />
            <h2 className="hidden lg:flex text-lg    ">Home</h2>
          </div>
        </Link>
        <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <MagnifyingGlassIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Search</h2>
        </div>

        <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <BellIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Notifications</h2>
        </div>
        <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <ClipboardIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Lists</h2>
        </div>
        <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <EnvelopeIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Messages</h2>
        </div>

        <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <BookmarkIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Bookmarks</h2>
        </div>
        <div
          onClick={signOutCurrentUser}
          className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4"
        >
          <UserIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">Sign Out</h2>
        </div>
        <div className="flex hidden md:flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <Image src={Twitterlogo} alt="image" className=" w-8" />
          <h2 className="hidden lg:flex text-lg  ">Premium</h2>
        </div>
        <div className="flex items-center md:hover:bg-[#242424] p-2 px-4 cursor-pointer rounded-full space-x-4">
          <EllipsisHorizontalCircleIcon className="w-8" />
          <h2 className="hidden lg:flex text-lg  ">More</h2>
        </div>
        <div className=" p-2 px-4">
          <Link href="#createpost">
            <PlusIcon className="w-8 lg:hidden" />

            <button className=" hidden text-lg lg:flex px-20 rounded-full font-bold py-3 text-white bg-[#1DA1F2]  hover:bg-[#1da0f2df] ">
              Post
            </button>
          </Link>
        </div>
      </div>

      <div className="  lg:flex lg:items-center lg:space-x-3 ">
        {user?.photoURL ? (
          <img
            src={user?.photoURL!}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full  w-10 h-10   object-cover"
          />
        ) : (
          <div className=" px-3 py-[6px] bg-twitter text-white rounded-full">
            {" "}
            {user?.displayName[0]}{" "}
          </div>
        )}

        <div className="hidden lg:flex lg:flex-col">
          <div className="flex space-x-2">
            <div className="  ">
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
