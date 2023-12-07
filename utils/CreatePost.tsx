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
import { useAppDispatch, useAppSelector } from "./hooks";

import { LazyLoadImage } from "react-lazy-load-image-component";
import toast, { Toaster } from "react-hot-toast";
import { tweetAdded } from "../slices/tweetslice";
import Twitter from "../assests/X_logo_2023_(white).png";

type Props = {};
function CreatePost({}: Props) {
  const [openImageLinkInput, setopenImageLinkInput] = useState<boolean>(false);
  const [tweetText, settweetText] = useState<string>("");
  const [imageLink, setimageLink] = useState<string>("");

  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  async function postTWeet(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const tweet = {
      userName: user.displayName,
      userEmail: user.email,
      userPhotoURL: user.photoURL,
      uid: user.uid,
      tweetText: tweetText,
      image: imageLink,
      date: new Date().toString(),
    };
    try {
      await addDoc(collection(db, "posts"), tweet);
      dispatch(tweetAdded());
      settweetText("");
      setimageLink("");
      toast.success("Tweet Added Successfully");
    } catch (e) {
      toast.error("Error adding tweet");
    }
  }
  return (
    <div className="flex  space-x-2 p-2 md:p-4 border-t ">
      <Toaster />
      <div>
        {user.photoURL ? (
          <LazyLoadImage
            src={user.photoURL}
            alt="profile picture"
            width={200}
            height={200}
            className="  w-[40px] h-[40px]  object-cover  object-center rounded-full"
          />
        ) : (
          <div className=" w-[40px] h-[40px]  rounded-full ">
            <Image
              src={Twitter}
              alt="twitter"
              width={50}
              height={50}
              className=" w-full h-full"
            />
          </div>
        )}
      </div>
      <form onSubmit={postTWeet}>
        <textarea
          onChange={(e) => settweetText(e.target.value)}
          maxLength={280}
          value={tweetText}
          className=" md:text-lg  w-[250px] md:w-[480px] outline-none p-2  h-[100px]  bg-black "
          placeholder="What's happening?"
        ></textarea>
        <div className="flex space-x-1   border-b">
          <GlobeAsiaAustraliaIcon className="w-4 text-twitter" />
          <h3 className=" text-twitter font-bold">Everyone can reply</h3>
        </div>
        {openImageLinkInput && (
          <div>
            <input
              onChange={(e) => setimageLink(e.target.value)}
              className="border-b p-2  outline-none w-full mt-2 bg-black"
              type="url"
              value={imageLink}
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
            {user.uid !== "" && tweetText ? (
              <button
                type="submit"
                className=" bg-twitter font-bold px-4 py-2 rounded-full text-white"
              >
                Tweet
              </button>
            ) : (
              <button
                disabled
                type="submit"
                className=" cursor-not-allowed bg-twitter opacity-30 font-bold px-4 py-2 rounded-full text-white"
              >
                Tweet
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreatePost;
