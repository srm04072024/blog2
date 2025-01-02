import Image from "./Image";
import { Link } from "react-router-dom";
function PostlistItem() {
  return (
    <div className="h-full w-72 max-w-xs rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <div className="grid h-full grid-rows-2 overflow-hidden rounded-lg border-2 border-gray-300 border-opacity-60">
        <Image
          src="postImg.jpeg"
          className="object-cover w-full h-48"
          w="500"
        />
        <div className="flex flex-col justify-between p-4">
          <div className=" flex gap-2">
            <Link className="text-blue-800 text-sm">Web Design</Link>
            <span className="text-gray-500 text-sm">3 Days Ago</span>
          </div>
          <h1 className="title-font text-lg font-medium text-gray-900">
            The Catalyzer
          </h1>
          <p className="text-sm leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex flex-wrap items-center">
            <Link
              to="/test"
              className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0 cursor-pointer"
            >
              Learn More
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostlistItem;
