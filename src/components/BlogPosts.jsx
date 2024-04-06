import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, searchByCategory } from "../store/blogpost/search/actions";
import Card from "./Card";
import deleteSvg from "../assets/delete.svg";
import PopularPosts from "./PopularPosts";
import PinnedPost from "./PinnedPost";
import { useCategoryFilterContext } from "./CategoryFilterProvider";

const BlogPosts = () => {
  const blogs = useSelector((state) => state.blogs);

  const { categoryFilterInfo, categoryFilterHandler } =
    useCategoryFilterContext();

  const [pinnedPost, setPinnedPost] = useState(null);

  useEffect(() => {
    if (!pinnedPost) {
      const randomIndex = Math.floor(Math.random() * blogs.length);
      setPinnedPost(blogs[randomIndex]);
    }
  }, [pinnedPost]);

  return (
    <main className="relative bg-white pt-2 pb-20 px-4 sm:px-6 lg:pt-1 lg:pb-16 lg:px-8">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-4">
        <div className="w-full lg:w-3/4">
          <div className="text-center">
            <div className="bg-white p-4">
              <a
                href="#"
                className="inline-flex w-full justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg "
              >
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/infokeedaAdImg.jpg"
                  alt="image description"
                />
              </a>
            </div>
          </div>

          {pinnedPost && (
            <section className="w-full p-2 sm:pl-28 ">
              <h1 className="text-lg text-black font-bold mt-4 mb-2">
                Pinned Post
              </h1>
              <div className="flex flex-row border border-gray-400 rounded-lg bg-white p-4 gap-3 max-sm:flex-col ">
                <PinnedPost
                  key={pinnedPost.id}
                  pinnedPost={pinnedPost}
                  categoryFilterHandler={categoryFilterHandler}
                />
              </div>
            </section>
          )}

          <section className="w-full p-2 sm:pl-28 ">
            <h1 className="text-lg text-black font-bold mt-4 mb-2">
              Latest Posts
            </h1>
            <div className="grid gap-4 lg:grid-cols-3 lg:max-w-none">
              {blogs.length
                ? blogs.map((blog) => (
                    <Card
                      key={blog.id}
                      blog={blog}
                      categoryFilterHandler={categoryFilterHandler}
                    />
                  ))
                : "No Match Found"}
            </div>
          </section>
        </div>

        <div className="w-full md:w-1/3 p-4 sm:pr-16">
          <div className="bg-white  p-4 sm:ml-6 ">
            <h2 className="text-lg font-bold mb-4">Popular Posts</h2>
            <ul>
              {blogs.slice(0, 4).map((blog, index) => (
                <PopularPosts key={index} blog={blog} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPosts;
