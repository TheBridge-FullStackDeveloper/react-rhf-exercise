import React from "react";


export const PostDetails = () => {




  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-4 text-white">Post Details</h1>
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
        </div>
      )}
    </div>
  );
};


