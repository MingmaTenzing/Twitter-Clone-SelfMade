import Head from "next/head";
import Nav from "../../components/Nav";
import Feed from "../../components/Feed";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { login } from "../../slices/userSlice";
import SideMenu from "../../components/SideMenu";

export interface user {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [currentUser, setCurrentUser] = useState<user>();
  const [userNotloggedIn, setusernotLoggedIn] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    if (currentUser) {
      dispatch(login(currentUser));
    }
  }, [currentUser]);
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setCurrentUser({
          displayName: userCredential.displayName || "",
          email: userCredential.email || "",
          photoURL: userCredential.photoURL || "",
          uid: userCredential.uid || "",
        });
      } else {
        setusernotLoggedIn(true);
      }
    });
  }, []);

  return (
    <main className=" relative  bg-black text-white ">
      <Head>
        <title>X</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center ">
        <Nav />
        <Feed />
        <SideMenu />

        {userNotloggedIn && (
          <div className=" flex  justify-center items-center   fixed left-0 bottom-0 w-full h-[60px] bg-black">
            <p className=" font-semibold text-white">
              Log in and start Tweeting?{" "}
              <span
                className="  text-twitter  cursor-pointer"
                onClick={() => router.push("/login")}
              >
                {" "}
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
