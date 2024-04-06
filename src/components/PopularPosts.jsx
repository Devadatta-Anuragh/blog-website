import React from "react";
import { useNavigate } from "react-router-dom";

const PopularPosts = ({ blog }) => {
  const { id, body } = blog;

  let firstParagraphContent = "";
  const firstParagraph = body.find((item) => item.type === "paragraph");
  if (firstParagraph) {
    firstParagraphContent = firstParagraph.content.substring(0, 75);
  }

  const navigate = useNavigate();
  const formattedTitle = encodeURIComponent(
    decodeURIComponent(blog.title).replace(/ /g, "-")
  );
  const handleBlogtitle = (e) => {
    e.preventDefault();
    navigate(`/blog-info/${id}-${formattedTitle}`);
  };

  return (
    <>
      <div
        key={blog.id}
        className="max-w-sm rounded overflow-hidden border border-gray-300 p-2 mb-2"
      >
        <div className="px-2 py-1">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-600 ">
              {blog.lastUpdated} - in{" "}
              <span className="cursor-pointer hover:underline inline-flex items-center px-3 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {blog.category}
              </span>
            </p>
          </div>
          <div
            className="font-bold text-base hover:text-orange-400 hover:cursor-pointer"
            onClick={(e) => handleBlogtitle(e)}
          >
            {blog.title}
          </div>
          <p className="text-gray-700 text-sm">{firstParagraphContent}...</p>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src={blog.author_image}
                alt=""
              />
            </div>
            <div className="mt-2  w-full">
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
                <time dateTime="2020-03-16">{blog.lastUpdated} </time>
                <span aria-hidden="true"> &middot; </span>
                <span> 6 min read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPosts;
