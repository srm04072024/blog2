import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="">Loading.....</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">You Should Signin!</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-screen flex flex-col gap-4">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add A Cover Image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="General">General</option>
            <option value="WebDesign">Web Design</option>
            <option value="Database">Database</option>
            <option value="Development">Development</option>
            <option value="Search Engines">Search Engines</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          placeholder="A Short Description"
          name="desc"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl p-2 w-36">
          {" "}
          Send
        </button>
      </form>
    </div>
  );
}

export default Write;
