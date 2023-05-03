import Image from "next/image"
import profile from "../assests/profile.jpg"
import { FaceSmileIcon, GifIcon, GlobeAltIcon, GlobeAsiaAustraliaIcon, MapIcon, MapPinIcon, PhotoIcon } from "@heroicons/react/24/outline"

type Props = {}
function CreatePost({}: Props) {
  return (
    <div className="flex space-x-6 p-2">
        <div>
            <Image src={profile} alt="profile picture" width={200} height={200}  className="w-[50px] rounded-full"/>
        </div>
        <form>
            <textarea className=" w-[250px] outline-none p-2  h-[100px]  " placeholder="What's happening?"></textarea>
           <div className="flex space-x-1  border-b">
            
           <GlobeAsiaAustraliaIcon className="w-4 text-twitter" />
            <h3 className=" text-twitter font-bold">Everyone can reply</h3>
           </div>
           <div className="flex justify-between  items-center p-2  ">

           <div className="flex space-x-2 ">
            <PhotoIcon className="w-6 text-twitter" />
            <GifIcon className="w-6 text-twitter" />
            <FaceSmileIcon className="w-6 text-twitter" />
            <MapPinIcon className="w-6 text-twitter" />
           </div>
           <div>
            <button  className=" bg-twitter font-bold px-4 py-2 rounded-full text-white">Tweet</button>
           </div>
           </div>
        </form>
        
    </div>
  )
}
export default CreatePost