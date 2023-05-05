import Image from "next/image";
import profile from "../assests/profile.jpg";
import { db } from "@/firebase/init";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  FaceSmileIcon,
  GifIcon,
  GlobeAltIcon,
  GlobeAsiaAustraliaIcon,
  MapIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { FormEvent, useEffect, useState } from "react";



type Props = {};
function CreatePost({}: Props) {
  const [openImageLinkInput, setopenImageLinkInput] = useState<boolean>(false);
  const [tweetText, settweetText] = useState<string>("");
  const [imageLink, setimageLink] = useState<string>("");
  

 


  async function postTWeet(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const tweet = {
      tweetText: tweetText,

      image: imageLink,
      date: new Date().toString()
    };
    try {
      await addDoc(collection(db, "posts"), tweet);
      console.log("it works");
    } catch (e) {
      console.error("Error adding tweet:", e);
    }
  }

  return (
    <div className="flex space-x-6 p-2 md:p-4 border-t">
      <div>
        <Image
          src={profile}
          alt="profile picture"
          width={200}
          height={200}
          className="w-[50px] rounded-full"
        />
      </div>
      <form onSubmit={postTWeet}>
        <textarea
          onChange={(e) => settweetText(e.target.value)}
          maxLength={280}
          className=" md:text-lg  w-[250px] md:w-[480px] outline-none p-2  h-[100px]  "
          placeholder="What's happening?"
        ></textarea>
        <div className="flex space-x-1  border-b">
          <GlobeAsiaAustraliaIcon className="w-4 text-twitter" />
          <h3 className=" text-twitter font-bold">Everyone can reply</h3>
        </div>
        {openImageLinkInput && (
          <div>
            <input
              onChange={(e) => setimageLink(e.target.value)}
              className="border-b p-2  outline-none w-full mt-2"
              type="url"
              placeholder="Image Link"
            ></input>
          </div>
        )}

        <div className="flex justify-between  items-center p-2  ">
          <div className="flex space-x-2 ">
            <PhotoIcon
              onClick={() => setopenImageLinkInput(!openImageLinkInput)}
              className="w-6 text-twitter"
            />

            <GifIcon className="w-6 text-twitter" />
            <FaceSmileIcon className="w-6 text-twitter" />
            <MapPinIcon className="w-6 text-twitter" />
          </div>
          <div>
            <button
              type="submit"
              className=" bg-twitter font-bold px-4 py-2 rounded-full text-white"
            >
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreatePost;
