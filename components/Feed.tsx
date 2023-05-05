import CreatePost from "../utils/CreatePost"
import FeedHeader from "../utils/FeedHeader"
import Post from "../utils/Post"
import ShowPosts from "../utils/ShowPosts"

type Props = {}
function Feed({}: Props) {
  return (
    <div className=" w-full md:w-[600px] border-r ">
        <FeedHeader />
        <CreatePost/>
        <ShowPosts />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
export default Feed