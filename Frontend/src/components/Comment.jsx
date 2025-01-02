import Image from "./Image";
function Comment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-2">
        <Image
          src="userImg.jpeg"
          className="w-6 h-6 rounded-full object-cover"
          w="40"
        />
        <span className="font-thin">joneDeo</span>
        <span className="text-xs text-gray-500">2 hours ago</span>
      </div>
      <div>
        <p className="text-gray-500 text-xs mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin
          maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula
          eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia,
          at bibendum elit posuere. Aliquam eget leo nec nibh mollis
          consectetur.
        </p>
      </div>
    </div>
  );
}

export default Comment;
