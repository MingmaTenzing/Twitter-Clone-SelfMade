import Image from "next/image";
import twitter from "../../../assests/twitter.png";
import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../../utils/hooks";
import { login } from "../../../slices/userSlice";
import { log } from "console";
import { user } from "../createprofile";

type Props = {};
function index({}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [Email, setEmail] = useState<string>();
  const [Password, setPassword] = useState<string>();

  function loginUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, Email!, Password!)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="p-4">
      <div className="flex  flex-col items-center space-y-4">
        <Image
          src={twitter}
          alt="twitter logo"
          width={200}
          height={200}
          className="w-20"
        />

        <h1 className="text-2xl font-bold ">Sign in to your Twitter Account</h1>
      </div>
      <form onSubmit={loginUser} className="mt-10">
        <h2 className="font-bold text-lg">Login</h2>
        <div className="mt-4 space-y-4">
          <div className="">
            <input
              type="email"
              required
              className="border p-3 outline-none w-full"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="">
            <input
              minLength={8}
              required
              type="password"
              className="border p-3 outline-none w-full"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>

        <button
          type="submit"
          className="text-white  mt-4 bg-black px-4 py-2 rounded-full"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
export default index;
