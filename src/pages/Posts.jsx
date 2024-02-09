import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../api/posts";
import { Link } from "react-router-dom";

export const Posts = () => {
  const { data: postData, isLoading } = useQuery({
    queryKey: ["postList"],
    queryFn: getPosts,
  });

  return (
    <div class="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 class="text-3xl font-bold mb-4 text-white">Posts</h1>

      {isLoading ? (
        <div class="text-gray-500">Loading...</div>
      ) : (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postData?.map((post) => (
            <Link
              key={post.id}
              class="bg-white shadow-md rounded-md p-4"
              to={`/post/${post.id}`}
            >
              <h2 class="text-xl font-semibold mb-2">{post.title}</h2>
              <p class="text-gray-700">{post.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
