import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchResult = ({
  pinnedPost,
  authorFilterHandler,
  categoryFilterHandler,
}) => {
  const blogs = useSelector((searchBlogs) => searchBlogs.blogs);

  const navigate = useNavigate();

  return (
    <>
      <section className="w-full p-2 sm:pl-28 ">
        <h1 className="text-lg text-black font-bold mt-4 mb-2">
          Search Results{" "}
        </h1>
        <div className="flex flex-col border border-gray-400 rounded-lg bg-white p-4 gap-3 max-sm:flex-col ">
          {blogs.length
            ? blogs.map((blog) => {
                const formattedTitle = encodeURIComponent(
                  decodeURIComponent(blog.title).replace(/ /g, "-")
                );

                const handleBlogtitle = (e) => {
                  e.preventDefault();
                  navigate(`/blog-info/${blog.id}-${formattedTitle}`);
                };

                return (
                  <article
                    key={blog.id}
                    className="flex flex-row rounded-lg gap-3 border-gray-400 overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-44 w-full object-cover scale-100 hover:scale-110 duration-1000 mb-1"
                        draggable="false"
                        src={blog.blog_post_background}
                        alt={blog.title}
                      />
                    </div>

                    <div className="flex-1 bg-white p-2 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-600">
                          <span
                            onClick={() => categoryFilterHandler(blog.category)}
                            className="cursor-pointer inline-flex items-center px-3 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                          >
                            {blog.category}
                          </span>
                        </p>
                        <a href="# " className="block mt-1">
                          <p
                            className="text-base font-bold text-gray-900 w-full"
                            onClick={(e) => handleBlogtitle(e)}
                          >
                            {blog.title}
                          </p>
                        </a>
                        <p className="text-gray-700 text-sm w-full">
                          {blog.description && blog.description.length > 200
                            ? `${blog.description.substring(0, 200)}...`
                            : blog.description}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={blog.author_image}
                            alt=""
                          />
                        </div>
                        <div className="ml-3  w-full">
                          <div className="flex flex-row justify-between">
                            <p
                              onClick={() => authorFilterHandler(blog.author)}
                              className="text-xs font-medium cursor-pointer text-gray-900 hover:underline"
                            >
                              {blog.author}
                            </p>
                            <p className="text-purple-600 text-xs font-medium cursor-pointer">
                              Read more
                            </p>
                          </div>
                          <div className="flex space-x-1 text-[10px] text-gray-500">
                            <time dateTime="2020-03-16">
                              {blog.lastUpdated}
                            </time>
                            <span aria-hidden="true"> &middot; </span>
                            <span> 6 min read </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            : "No Match Found"}
        </div>
      </section>
    </>
  );
};

export default SearchResult;
