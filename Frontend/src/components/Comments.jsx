import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="flex flex-col gap-8 lg:w-3/4">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-4 w-full">
        <textarea
          placeholder="Write a Comment......."
          className="w-full p-4 rounded-xl bg-gray-100"
        ></textarea>
        <button className="bg-blue-800 px-4 py-2 text-white font-medium rounded-xl">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
