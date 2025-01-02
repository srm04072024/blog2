import PostlistItem from "./PostlistItem";
function Postlist() {
  return (
    <div className="p-auto m-auto flex h-4/5 flex-col justify-center">
      <div className=" flex overflow-scroll py-10 overflow-y-hidden">
        <div className="flex flex-nowrap gap-10">
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
          <PostlistItem />
        </div>
      </div>
    </div>
  );
}

export default Postlist;
