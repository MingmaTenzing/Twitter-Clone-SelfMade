type Props = {};
function Subscribe({}: Props) {
  return (
    <div className=" bg-sideMenuBg p-4 rounded-lg space-y-3">
      <h3 className=" text-xl font-bold "> Subscribe to Premium</h3>
      <p className=" text-sm">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button className=" bg-twitter px-3 py-2 rounded-full text-sm font-semibold text-white">
        Subscribe
      </button>
    </div>
  );
}
export default Subscribe;
