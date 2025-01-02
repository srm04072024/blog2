import Navbar from "./components/Navbar";
import Dashboard from "./Layout/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Write from "./routes/Write";
import PostList from "./routes/PostList";
import SinglePost from "./routes/SinglePost";
function App() {
  const publishKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  console.log(publishKey);

  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      {/* NAVBAR */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="write" element={<Write />} />
            <Route path="post-list" element={<PostList />} />
            <Route path="post/:postId" element={<SinglePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
