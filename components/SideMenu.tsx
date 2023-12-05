import Search from "./SideMenu Components/Search";
import Subscribe from "./SideMenu Components/Subscribe";
import WhatsHappening from "./SideMenu Components/WhatsHappening";
import Whotofollow from "./SideMenu Components/Whotofollow";

type Props = {};
function SideMenu({}: Props) {
  return (
    <div className=" w-[350px]  hidden lg:flex flex-col p-2 space-y-3 sticky top-0  h-[100vh] overflow-scroll scrollbar-hide  ">
      <Search />
      <Subscribe />
      <WhatsHappening />
      <Whotofollow />
    </div>
  );
}
export default SideMenu;
