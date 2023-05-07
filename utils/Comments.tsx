import Image from "next/image";
import profile from "../assests/profile.jpg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Comment, tweet } from "../components/Feed";

type Props = {};
function Comments({comment}: {comment: Comment}) {
  return (
    <div className=" pl-1 border-l flex space-x-2 m-2 mt-8 md:w-[400px]">
      <div>
        <img
          src={comment.userPhoto}
          alt="profile picture"
          width={200}
          height={200}
          className="max-w-[30px] min-w-[30px] h-[30px] object-cover rounded-full"
        />
      </div>

      <div>
        <div className=" flex items-center space-x-1 text-sm md:text-base">
          <div className="w-[100px]">
            <h2 className=" truncate font-bold">{comment.userName} </h2>
          </div>
          <CheckBadgeIcon className="w-6 text-twitter" />
          <div className="w-[80px]">
            <h3 className=" truncate text-gray-400 font-light">
              {comment.userEmail}
            </h3>
          </div>
        </div>
        <div>
          <h3 className="text-sm">{comment.commentText}</h3>
        </div>
      </div>
    </div>
  );
}
export default Comments;
