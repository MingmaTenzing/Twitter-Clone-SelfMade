import { useEffect, useState } from "react";
import CreatePost from "../utils/CreatePost"
import FeedHeader from "../utils/FeedHeader"
import Post from "../utils/Post"
import ShowPosts from "../utils/ShowPosts"
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/init";

export interface tweet {
  tweetText: string;
  image: string;
  id: number;
}


type Props = {}
function Feed({}: Props) {
  const [Tweets, setTweets] = useState<tweet[]>();

  console.log(Tweets)
  useEffect(() => {


    async function getPosts() {
      const {docs} = await getDocs(collection(db, "posts"));
      const posts:any = docs.map((doc) => ({...doc.data(), id: doc.id }))
      setTweets(posts)
    }

    getPosts()
  },[])
  return (
    <div className=" w-full md:w-[600px] border-r ">
        <FeedHeader />
        <CreatePost/>
        <ShowPosts />
        {
         Tweets && Tweets.map((tweet) => <Post tweet={tweet} key={tweet.id} />  )
        }
    </div>
  )
}
export default Feed