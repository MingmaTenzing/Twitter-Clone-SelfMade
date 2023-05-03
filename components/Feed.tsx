import CreatePost from "../utils/CreatePost"
import FeedHeader from "../utils/FeedHeader"
import ShowPosts from "../utils/ShowPosts"

type Props = {}
function Feed({}: Props) {
  return (
    <div className=" w-full md:w-[600px]">
        <FeedHeader />
        <CreatePost/>
        <ShowPosts />
    </div>
  )
}
export default Feed