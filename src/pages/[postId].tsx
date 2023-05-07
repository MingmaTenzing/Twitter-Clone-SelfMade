import { Timeline } from "react-twitter-widgets";
import Nav from "../../components/Nav";
import Post from "../../utils/Post";
import { FormEvent, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/init";
import { Comment, tweet } from "../../components/Feed";
import Comments from "../../utils/Comments";
import profile from "../../assests/profile.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppSelector } from "../../utils/hooks";

type Props = {};
function Tweet({}: Props) {
  const [Tweet, setTweet] = useState<tweet>();
  const [Reply, setReply] = useState<string>();
  const [comments, setComments] = useState<Comment[]>();
  const [commentadded, setcommentAdded] = useState<boolean>(false);
  const [postId, setpostId] = useState<string>();
  const router = useRouter();
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    if (router.isReady) {
      const postId = Array.isArray(router.query.postId)
        ? router.query.postId.join(",")
        : router.query.postId;
      setpostId(postId);
    }
  }, [router.isReady]);

  useEffect(() => {


    async function getPost() {
     const docRef = doc(db, "posts", `${postId}`)
     const docSnap = await getDoc(docRef);
     const data = docSnap.data();
     if (data) {

       setTweet({
        date: data.date,
        image: data.image,
        tweetText: data.tweetText,
        uid: data.uid,
        userEmail: data.userEmail,
        userName: data.userName,
        userPhotoURL: data.userPhotoURL,
id: data.id,
       })
     }

    }

    
    getPost()
  },[postId])
  console.log(Tweet)

  useEffect(() => {
    async function getComments() {
      if (postId) {
        const commentsRef = query(
          collection(db, "comments"),
          where("postId", "==", postId)
        );
        const { docs } = await getDocs(commentsRef);
        const data: any = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setComments(data);
      }
    }
    getComments();
  }, [commentadded, postId]);
  console.log(comments);

  async function sendReply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const comment = {
      commentText: Reply,
      postId: postId,
      date: new Date().toString(),
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
    };

    try {
      await addDoc(collection(db, "comments"), comment);
      setcommentAdded(!commentadded);

      console.log("comment added");
    } catch (e) {
      console.error("Error posting comment:", e);
    }
  }
console.log(user)
  return (
    <main className="flex">
      <Nav />

      <div className="md:border-r">
        {Tweet && <Post tweet={Tweet} />}

        <div className="flex items-center p-2 md:p-4 md:space-x-10 space-x-4 border-y">
          <img
            src={user.photoURL}
            alt="profile"
            width={200}
            height={200}
            className="w-[40px] h-[40px]  object-cover object-center rounded-full"
          />
          <form onSubmit={sendReply} className="md:space-x-4">
            <input
              type="text"
              onChange={(e) => setReply(e.target.value)}
              className=" text-sm md:text-base outline-none  w-2/3 md:w-[360px] md:p-4 "
              placeholder="Enter your reply"
            ></input>
            <button
              type="submit"
              className=" bg-twitter text-white rounded-full font-semibold px-3 md:px-5 py-2"
            >
              Reply
            </button>
          </form>
        </div>

        {/** COMMENTS SECTION */}

        {comments?.map((comment) => (
          <Comments comment={comment} key={comment.id} />
        ))}
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
