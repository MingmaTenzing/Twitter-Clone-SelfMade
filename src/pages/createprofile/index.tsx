import { auth } from "@/firebase/init";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import x from "../../../assests/X_logo_2023_(white).png";
import Google from "../../../assests/google.png";
import Apple from "../../../assests/apple.png";
import { TextField } from "@mui/material";

export interface user {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

type Props = {};
function CreateProfile({}: Props) {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const [userName, setuserName] = useState<string>();
  const [photoURL, setPhotoURL] = useState<string>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/signup");
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
        router.push("/");
      })
      .catch((error) => {});
  }

  return (
    <section className=" p-8 bg-black w-full  h-[100vh] md:overflow-hidden m:auto text-white ">
      <div className="   bg-black  text-white  p-6  md:w-1/2 md:m-auto lg:w-1/3 flex-col items-center  h-full ">
        <div className="  space-y-8 flex flex-col justify-center h-full ">
          <div className=" flex  justify-center">
            <Image src={x} alt="x logo" className="w-8 " />
          </div>
          <p className=" font-bold text-2xl"> Create your Profile</p>

          <form
            className=" flex flex-col justify-center space-y-6"
            onSubmit={addUserDetails}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              required
              type="text"
              variant="outlined"
              sx={{
                fieldset: { borderColor: "#242424" },
                input: { color: "white" },
                label: { color: "#242424" },
                borderColor: "white",
                border: { color: "white" },
              }}
              onChange={(e) => setuserName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Profile Picture Link"
              required
              variant="outlined"
              sx={{
                fieldset: { borderColor: "#242424" },
                input: { color: "white" },
                label: { color: "#242424" },
                borderColor: "white",
                border: { color: "white" },
              }}
              error={error}
              helperText="The Image Link is too long. Make it short"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <div>
              <button
                type="submit"
                className=" w-full h-12 font-semibold rounded-full text-white bg-twitter"
              >
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default CreateProfile;
