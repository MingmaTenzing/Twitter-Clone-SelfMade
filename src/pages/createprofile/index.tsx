import { auth } from "@/firebase/init";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import twitter from "../../../assests/twitter.png";
import Image from "next/image";

export interface user {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

type Props = {};
function CreateProfile({}: Props) {
  const router = useRouter();
  const [userName, setuserName] = useState<string>();
  const [photoURL, setPhotoURL] = useState<string>();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);

  function addUserDetails(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateProfile(auth.currentUser!, {
      displayName: userName,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("user updated");
        router.push("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(auth.currentUser)

  return (
    <div className="p-4  md:w-[500px] mt-10 m-auto">
      <div className="flex  flex-col items-center space-y-4">
        <Image
          src={twitter}
          alt="twitter logo"
          width={200}
          height={200}
          className="w-20"
        />

        <h1 className="text-2xl font-bold ">Create your Profile</h1>
      </div>
      <form onSubmit={addUserDetails} className="mt-10">
        <h2 className="font-bold text-lg">Profile Details</h2>
        <div className="mt-4 space-y-4">
          <div className="">
            <input
              type="text"
              required
              className="border p-3 outline-none w-full"
              placeholder="Name"
              onChange={(e) => setuserName(e.target.value)}
            ></input>
          </div>
          <div className="">
            <input
              minLength={8}
              
              type="url"
              className="border p-3 outline-none w-full"
              placeholder="PROFILE PHOTO URL (OPTIONAL)"
              onChange={(e) => setPhotoURL(e.target.value)}
            ></input>
          </div>
        </div>

        <button
          type="submit"
          className="text-white  mt-4 bg-black px-4 py-2 rounded-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default CreateProfile;
