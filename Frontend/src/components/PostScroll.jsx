import PostCard from "./PostCard";

function PostCards() {
  return (
    <div className="p-auto m-auto flex h-4/5 flex-col justify-center">
      <div className=" flex overflow-scroll py-10 overflow-y-hidden">
        <div className="flex flex-nowrap gap-10">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}

export default PostCards;
