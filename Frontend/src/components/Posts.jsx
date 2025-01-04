import PostlistItem from "./PostlistItem";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

function Posts() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="">
      <PostlistItem />
      <PostlistItem />
      <PostlistItem />
      <PostlistItem />
      <PostlistItem />
      <PostlistItem />
      <PostlistItem />
    </div>
  );
}

export default Posts;
