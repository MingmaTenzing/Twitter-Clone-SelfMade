import { useEffect, useState } from "react";
import CreatePost from "../utils/CreatePost";
import FeedHeader from "../utils/FeedHeader";
import Post from "../utils/Post";
import ShowPosts from "../utils/ShowPosts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/init";
import { useRouter } from "next/router";
import { useAppSelector } from "../utils/hooks";
import PostLoading from "./PostLoading";

export interface tweet {
  date: string;
  image: string;
  tweetText: string;
  uid: string;
  userEmail: string;
  userName: string;
  userPhotoURL: string;
  id: number;
}

export interface Comment {
  commentText: string;
  date: string;
  postId: string;
  id: string;
  userName: string;
  userEmail: string;
  userPhoto: string;
}

type Props = {};
function Feed({}: Props) {
  const [Tweets, setTweets] = useState<tweet[]>();
  const router = useRouter();

  const tweetadded = useAppSelector((state) => state.tweet);

  console.log(Tweets);
  useEffect(() => {
    async function getPosts() {
      const { docs } = await getDocs(collection(db, "posts"));
      const posts: any = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTweets(posts);
    }

    getPosts();
  }, [tweetadded]);
  return (
    <div className=" bg-black text-white md:w-[600px]  overflow-x-hidden border-r  ">
      <FeedHeader />
      <section id="createpost">
        <CreatePost />
      </section>

      <ShowPosts />

      {Tweets
        ? Tweets.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ).map((tweet) => (
            <div
              className="  bg-black  hover:bg-sideMenuBg hover:bg-opacity-20 cursor-pointer "
              key={tweet.id}
            >
              <Post tweet={tweet} key={tweet.id} />
            </div>
          ))
        : new Array(8).fill(0).map((_, index) => <PostLoading key={index} />)}
    </div>
  );
}
export default Feed;
