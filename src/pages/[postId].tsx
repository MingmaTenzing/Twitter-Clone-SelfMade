import { Timeline } from "react-twitter-widgets";
import Nav from "../../components/Nav";
import Post from "../../utils/Post";
import { FormEvent, useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/init";
import { Comment, tweet } from "../../components/Feed";
import Comments from "../../utils/Comments";
import profile from "../../assests/profile.jpg"
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};
function Tweet({}: Props) {
  const [Tweet, setTweet] = useState<tweet>();
  const [Reply, setReply] = useState<string>()
  const [comments, setComments] = useState<Comment>();
  
  const router = useRouter();

  const postId = router.query.postId;
  

  useEffect(() => {
    async function getTweet() {
        const docRef = doc(db, "posts", `${postId}`)
        const docSnap = await getDoc(docRef)
        const data:any = docSnap.data();
        setTweet(data);
    }
    

    getTweet()

    },[])

    useEffect(() => {
      async function getComments() {
        const commentsRef = query(collection(db,"comments"), where("postId", "==", postId));
        const {docs} = await getDocs(commentsRef)
        const data:any = docs.map((doc) => ({...doc.data(), id: doc.id}))
        setComments(data);
      }
      getComments()
    }, [])
    console.log(comments)

    async function sendReply(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const comment = {
          commentText: Reply,
          postId: postId,
          date: new Date().toString(),

        }

        try {
          await addDoc(collection(db, "comments"), comment);
          console.log('comment added')
        }catch(e) {
          console.error('Error posting comment:', e)
        }

      

    }

  return (
    <main className="flex">
      <Nav />
  

      <div className="md:border-r">
      


      {
        Tweet &&  <Post tweet={Tweet} />
      }

      <div className="flex p-2 md:p-4 md:space-x-4 space-x-1 border-y">
        <Image src={profile} alt="profile" width={200} height={200}  className="w-[40px] rounded-full"/>
        <form onSubmit={sendReply}>

        <input type="text" onChange={(e) => setReply(e.target.value)} className=" text-sm md:text-base outline-none w-2/3" placeholder="Enter your reply"></input>
        <button type="submit" className=" bg-twitter text-white rounded-full font-semibold px-3 md:px-5 py-2">Reply</button>
        </form>
      </div>



        {/** COMMENTS SECTION */}
        <Comments />
   
      </div>


      <div className="hidden lg:flex p-4 fixed top-0 right-20">
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "elonmusk" }}
          options={{ width: "400", height: "800" }}
        />
      </div>
    </main>
  );
}
export default Tweet;
