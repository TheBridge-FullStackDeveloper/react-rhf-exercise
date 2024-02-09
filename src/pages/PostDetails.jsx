import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts";

export const PostDetails = () => {

  const { postId } = useParams();


  const { data: postData, isLoading } = useQuery({
    queryKey: ["postList", postId],
    queryFn: () => getPostById(postId),
  });


  return (
    <div class="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 class="text-3xl font-bold mb-4 text-white">Post Details</h1>
      {isLoading ? (
        <div class="text-gray-500">Loading...</div>
      ) : (
        <div class="bg-white shadow-md rounded-md p-4">
          <h2 class="text-xl font-semibold mb-2">{postData.title}</h2>
          <p class="text-gray-700">{postData.content}</p>
        </div>
      )}
    </div>
  );
};
