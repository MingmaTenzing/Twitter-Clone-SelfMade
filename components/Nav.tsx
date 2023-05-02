import Image from "next/image"
import Twitterlogo from "../assests/twitter.png"
import { BeakerIcon, BellIcon, BookmarkIcon, EllipsisHorizontalCircleIcon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline'
import profile from "../assests/profile.jpg"
type Props = {}
function Nav({}: Props) {
  return (
    <div className="h-[100vh] w-[60px] md:w-1/6 border p-2 overflow-hidden  flex flex-col items-center md:items-end justify-between ">
        <div className="space-y-8 flex flex-col items-center">
            
<Image src={Twitterlogo} width={1687} height={1687} alt="Twitter Logo"  className="w-12"/> 
<HomeIcon className="w-8" />
<MagnifyingGlassIcon className="w-8" />
<BellIcon className="w-8" />
<EnvelopeIcon className="w-8" />
<BookmarkIcon className="w-8" />
<UserIcon className="w-8"/>
<EllipsisHorizontalCircleIcon className="w-8"/>
<PlusIcon className="w-8"/>

        </div>

<div className="">
    <Image src={profile} alt="Profile Picture" width={200} height={200} className="rounded-full md:w-[60px]" />

</div>
    </div>
  )
}
export default Nav