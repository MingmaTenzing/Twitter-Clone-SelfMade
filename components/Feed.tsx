import { useEffect, useState } from "react";
import CreatePost from "../utils/CreatePost"
import FeedHeader from "../utils/FeedHeader"
import Post from "../utils/Post"
import ShowPosts from "../utils/ShowPosts"
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/init";
import { useRouter } from "next/router";
import { useAppSelector } from "../utils/hooks";

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
id:string;
userName: string;
userEmail: string;
userPhoto: string;
}


type Props = {}
function Feed({}: Props) {
  const [Tweets, setTweets] = useState<tweet[]>();
  const router = useRouter()


const tweetadded = useAppSelector((state) => state.tweet)


  console.log(Tweets)
  useEffect(() => {


    async function getPosts() {
      const {docs} = await getDocs(collection(db, "posts"));
      const posts:any = docs.map((doc) => ({...doc.data(), id: doc.id }))
      setTweets(posts)
    }

    
    getPosts()
  },[tweetadded])
  return (
    <div className=" w-full md:w-[600px] border-r ">
        <FeedHeader />
        <CreatePost/>
        <ShowPosts />
        {
         Tweets && Tweets.map((tweet) =>
         <div onClick={() => router.push(`/${tweet.id}`)} className=" hover:bg-gray-100" key={tweet.id}> 
           <Post tweet={tweet} key={tweet.id} />  

          </div>)
        }
    </div>
  )
}
export default Feed