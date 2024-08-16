type Props = {};
function PostLoading({}: Props) {
  return (
    <div className="p-4 animate-pulse">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8  bg-gray-200 dark:bg-gray-700   rounded-full" />
        <div className="w-[100px] h-3  bg-gray-200 dark:bg-gray-700   rounded-lg" />
        <div className="w-[20px] h-3  bg-gray-200 dark:bg-gray-700   rounded-lg" />
        <div className="w-[30px] h-3  bg-gray-200 dark:bg-gray-700   rounded-lg" />
        <div className="w-[50px] h-3  bg-gray-200 dark:bg-gray-700   rounded-lg" />
      </div>
      <div className="ml-10">
        <div className="space-y-2">
          <div className="w-[full] h-1  bg-gray-200 dark:bg-gray-700   rounded-lg" />
          <div className="w-[full] h-1  bg-gray-200 dark:bg-gray-700   rounded-lg" />
          <div className="w-[full] h-1  bg-gray-200 dark:bg-gray-700   rounded-lg" />
        </div>

        <div className="w-full h-[200px] md:h-[300px]  bg-gray-200 dark:bg-gray-700   mt-4" />
      </div>
    </div>
  );
}
export default PostLoading;
