import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Comments from "../components/Comments";
function SinglePost() {
  return (
    <div className=" container flex flex-col mx-auto">
      <div className="bg-[#F5F4FF] py-4 px-8 flex items-center justify-between">
        <div className="">
          <h1 className="text-md md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>

          <p className="text-gray-600 text-sm">Published on April 4, 2023</p>
        </div>
        <div>
          <div className="md:flex items-center gap-6 ">
            <Link className="text-blue-800 hidden md:block">joneDeo</Link>
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-8 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt="Blog Featured Image"
              className="mb-8"
            />
            <div className="prose max-w-none leading-loose text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin
                maximus bibendum felis, id fermentum odio vestibulum id. Sed ac
                ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et
                ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh
                mollis consectetur.
              </p>
              <p>
                Suspendisse potenti. Mauris euismod, magna sit amet aliquam
                dapibus, ex sapien porta nisl, vel auctor orci velit in risus.
                Fusce gravida bibendum dui, id volutpat felis dignissim a. Duis
                sagittis, arcu ac convallis bibendum, neque dolor suscipit
                dolor, non malesuada magna orci a mauris. Proin sollicitudin
                diam eu enim tincidunt dapibus. Aliquam pharetra purus mauris,
                id lacinia mi malesuada ut. Integer dignissim, urna nec
                scelerisque feugiat, lacus sapien tincidunt sem, sed luctus enim
                libero vel nunc. Vivamus ornare, felis quis feugiat luctus, orci
                justo auctor urna, et elementum orci dolor ac ante. Ut varius
                sapien nec fringilla sodales. Suspendisse lacinia, metus eu
                suscipit lobortis, enim sapien commodo sapien, non facilisis
                urna elit eget elit.
              </p>
              <p>
                Nulla facilisi. Sed venenatis pretium ante, sed tempor turpis
                sagittis ac. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Integer vel diam
                arcu. Maecenas bibendum efficitur ex sit amet tristique. Nulla
                vel sapien euismod, bibendum velit id, facilisis magna. Sed
                vestibulum nisi vitae justo congue, eu bibendum augue interdum.
                Nam quis orci nec nulla posuere facilisis. Etiam feugiat ligula
                quis est auctor, et sagittis orci elementum. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Sed gravida neque vel tellus volutpat, vel laoreet lacus
                commodo. Vivamus quis enim leo.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="flex items-center gap-2 text-lg cursor-pointer my-6 ">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0000ff"
                width="25px"
                height="25px"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <span className=" tracking-widest">Web Design</span>
            </div>
            <div className="bg-[#F5F4FF] p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 3
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Blog Post 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F4FF] p-4 mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h2>
              <div className="flex flex-col gap-2 text-sm">
                <Link className="underline">All</Link>
                <Link className="underline" to="/">
                  Web Design
                </Link>
                <Link className="underline" to="/">
                  Development
                </Link>
                <Link className="underline" to="/">
                  Databases
                </Link>
                <Link className="underline" to="/">
                  Search Engines
                </Link>
                <Link className="underline" to="/">
                  Marketing
                </Link>
              </div>
            </div>
            <PostMenuActions />
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default SinglePost;
