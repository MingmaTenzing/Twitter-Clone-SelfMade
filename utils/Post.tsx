import Image from "next/image";
import profile from "../assests/profile.jpg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import Comments from "./Comments";
import { tweet } from "../components/Feed";
import TimeAgo from "react-timeago";
import { useState } from "react";
import { useRouter } from "next/router";

interface props {
  tweet: tweet;
}

function Post({ tweet }: props) {
  const [liked, setLiked] = useState<boolean>(false);
  const [retweet, setreTweet] = useState<boolean>(false);
  const [share, setShare] = useState<boolean>(false);
  const [chartBar, setChartBart] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="p-2  md:p-4 flex space-x-2  border">
      <div className="">
        {tweet.userPhotoURL ? (
          <LazyLoadImage
            src={tweet.userPhotoURL}
            alt="profile picture"
            width={200}
            height={200}
            className=" w-[40px] h-[40px] md:h-[50px] md:w-[50px]  object-cover rounded-full"
          />
        ) : (
          <div className=" px-4 py-[8px] bg-twitter text-white rounded-full">
            {tweet.userName[0]?.toUpperCase() || "T"}
          </div>
        )}
      </div>

      <div className=" text-[15px] w-[280px] md:w-[500px]   ">
        {/** USERNAME */}

        <div className=" flex items-center space-x-1">
          <div className="w-[80px] md:w-auto">
            <h2 className=" truncate font-bold">{tweet.userName} </h2>
          </div>
          {tweet.userPhotoURL && (
            <CheckBadgeIcon className="w-6 text-twitter" />
          )}
          <div className="hidden md:flex">
            <h3 className=" truncate text-sm text-gray-400 font-light">
              @{tweet.userName.toLocaleLowerCase()}
            </h3>
          </div>
          <span className="text-gray-400">.</span>
          <div className=" ">
            <h4 className="text-gray-400 text-sm  font-light">
              <TimeAgo date={tweet.date} />
            </h4>
          </div>
        </div>

        {/**Description and Image */}
        <div
          onClick={() => router.push(`/${tweet.id}`)}
          className="space-y-3 mt-2 cursor-pointer"
        >
          <h3>{tweet.tweetText}</h3>
          <LazyLoadImage
            src={tweet.image}
            className=" max-h-[510px] object-contain rounded-lg"
          />
        </div>

        {/**LIKES AND COMMENTS */}
        <div className="flex space-x-4 md:space-x-10 items-center  mt-3">
          <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex ">
            <ChatBubbleOvalLeftIcon
              className="w-4 md:w-6 cursor-pointer"
              onClick={() => router.push(`/${tweet.id}`)}
            />
            <span className="text-sm md:text-base">1,344</span>
          </div>
          <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            {retweet ? (
              <ArrowPathRoundedSquareIcon
                className="w-4 md:w-6 cursor-pointer text-orange-500 "
                onClick={() => setreTweet(!retweet)}
              />
            ) : (
              <ArrowPathRoundedSquareIcon
                className="w-4 md:w-6 cursor-pointer"
                onClick={() => setreTweet(!retweet)}
              />
            )}
            <span className="text-sm md:text-base">2k</span>
          </div>
          <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            {" "}
            {liked ? (
              <HeartIcon
                onClick={() => setLiked(!liked)}
                className="w-4 md:w-6 cursor-pointer   text-pink-400"
              />
            ) : (
              <HeartIcon
                onClick={() => setLiked(!liked)}
                className="w-4 md:w-6 cursor-pointer"
              />
            )}
            <span className="text-sm md:text-base">2M</span>
          </div>
          <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            {chartBar ? (
              <ChartBarIcon
                className="w-4 md:w-6 cursor-pointer text-green-500"
                onClick={() => setChartBart(!chartBar)}
              />
            ) : (
              <ChartBarIcon
                className="w-4 md:w-6 cursor-pointer"
                onClick={() => setChartBart(!chartBar)}
              />
            )}
            <span className="text-sm md:text-base">30K</span>
          </div>
          <div className=" text-gray-500  space-x-1 cursor-pointer  items-center flex">
            {share ? (
              <ArrowUpTrayIcon
                className="w-4 md:w-6 cursor-pointer text-twitter"
                onClick={() => setShare(!share)}
              />
            ) : (
              <ArrowUpTrayIcon
                className="w-4 md:w-6 cursor-pointer"
                onClick={() => setShare(!share)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
