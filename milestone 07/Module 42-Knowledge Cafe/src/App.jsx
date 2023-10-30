import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <div>
      <Header />
      <div className="flex justify-between px-10 mt-8 md:flex-row gap-4 lg:flex-row flex-col container mx-auto">
        <Blogs handleBookmarks={handleBookmarks} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
};

export default App;
