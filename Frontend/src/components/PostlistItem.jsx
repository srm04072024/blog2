import Image from "./Image";
import { Link } from "react-router-dom";

function PostlistItem() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden lg:block lg:w-1/3 ">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>

      {/* details */}
      <div className="flex flex-col gap-2 lg:w-2/3">
        <Link to="/test" className="text-xl  font-semibold lg:text-2xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to="#">
            JohnDoe
          </Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 Days Ago</span>
        </div>
        <p className=" text-xs tracking-wider">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin
          maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula
          eget dolor consequat tincidunt.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostlistItem;
