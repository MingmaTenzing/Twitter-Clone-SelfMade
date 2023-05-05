import Image from "next/image";
import profile from "../assests/profile.jpg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ArrowPathRoundedSquareIcon, ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/outline";
import Comments from "./Comments";
import { tweet } from "../components/Feed";

interface props{
  tweet: tweet
}

function Post({tweet}: props) {
  console.log(tweet.tweetText)
  console.log(tweet.id)
  return (
    <div className="p-2  md:p-4 flex space-x-2 ">
      <div className="">
        <Image
          src={profile}
          alt="profile picture"
          width={200}
          height={200}
          className="w-[50px] rounded-full"
        />
      </div>

      <div className=" text-[15px] w-[280px] md:w-[500px]   ">
        {/** USERNAME */}


        <div className=" flex items-center space-x-1">
          <div className="w-[100px]">
            <h2 className=" truncate font-bold">Mingma Tenzing Sherpa </h2>
          </div>
          <CheckBadgeIcon className="w-6 text-twitter" />
          <div className="w-[80px]">
            <h3 className=" truncate text-gray-400 font-light">
              @mingmtenzing
            </h3>
          </div>
          <span className="text-gray-400">.</span>
          <h4 className="text-gray-400  font-light">2h</h4>
        </div>

       


        {/**Description and Image */}
        <div className="space-y-3 mt-2">
          <h3>
            {tweet.tweetText}
          </h3>
          <img src={tweet.image} className=" max-h-[510px] object-contain rounded-lg" />
        </div>

        {/**LIKES AND COMMENTS */}
        <div className="flex space-x-4 md:space-x-10 items-center  mt-3">
            <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex ">
            <ChatBubbleOvalLeftIcon  className="w-4 md:w-6" />
            <span className="text-sm md:text-base">1,344</span>
            </div>
            <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            <ArrowPathRoundedSquareIcon  className="w-4 md:w-6" />
            <span className="text-sm md:text-base">2k</span>
            </div>
            <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            <HeartIcon  className="w-4 md:w-6" />
            <span className="text-sm md:text-base">2M</span>
            </div>
            <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            <ChartBarIcon  className="w-4 md:w-6" />
            <span className="text-sm md:text-base">30K</span>
            </div>
            <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            <ArrowUpTrayIcon  className="w-4 md:w-6" />
            
            </div>



        </div>

        {/** COMMENTS SECTION */}
        <Comments />
        <Comments />
        <Comments />

        
      </div>
    </div>
  );
}
export default Post;
