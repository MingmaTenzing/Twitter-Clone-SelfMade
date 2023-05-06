import { useEffect, useState } from "react";
import CreatePost from "../utils/CreatePost"
import FeedHeader from "../utils/FeedHeader"
import Post from "../utils/Post"
import ShowPosts from "../utils/ShowPosts"
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/init";
import { useRouter } from "next/router";

export interface tweet {
  tweetText: string;
  image: string;
  id: number;
  comments: [];
  
}

export interface Comment {
commentText: string;
date: string;
postId: string;
}


type Props = {}
function Feed({}: Props) {
  const [Tweets, setTweets] = useState<tweet[]>();
  const router = useRouter()

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
         Tweets && Tweets.map((tweet) =>
         <div onClick={() => router.push(`/${tweet.id}`)} className=" hover:bg-gray-100" key={tweet.id}> 
           <Post tweet={tweet} key={tweet.id} />  

          </div>)
        }
    </div>
  )
}
export default Feed