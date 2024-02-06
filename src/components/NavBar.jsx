import React from "react";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div class="relative bg-gradient-to-r from-blue-400 to-indigo-600">
        <nav class="bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded-b-full">
          <div class="container mx-auto flex justify-between items-center">
            <div>
              <a href="/" class="text-white text-2xl font-bold">
                Frustration Forum
              </a>
            </div>
            <div class="flex items-center space-x-6">
              <a
                href="/"
                class="text-white hover:text-gray-200 transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                class="text-white hover:text-gray-200 transition duration-300"
              >
                Posts
              </a>
            </div>
            <div class="hidden md:block">
              <button class="bg-white text-indigo-500 py-2 px-6 rounded-lg hover:bg-transparent hover:text-white transition duration-300">
                Join the community!
              </button>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};
