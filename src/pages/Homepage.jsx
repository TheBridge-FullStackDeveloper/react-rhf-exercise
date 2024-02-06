import React from "react";

export const Homepage = () => {
  return (
    <>
      <body class="bg-gray-100">
        <section class="relative bg-gradient-to-r from-blue-400 to-indigo-600 text-white py-20">
          {" "}
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4">
              Welcome to My Awesome Website
            </h2>
            <p class="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
              libero at nisi condimentum tristique.
            </p>
          </div>
        </section>

        <section class="py-16">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Our Features</h2>
            <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-x-8 md:space-y-0">
              <div class="bg-white p-8 rounded-lg shadow-md flex-1 transition duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ">
                <h3 class="text-xl font-semibold mb-4">Feature 1</h3>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-md flex-1 transform transition duration-300 hover:rotate-12 hover:scale-105 hover:shadow-2xl">
                <h3 class="text-xl font-semibold mb-4">Feature 2</h3>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-md flex-1 transform transition duration-600  hover:rotate-180 hover:shadow-2xl">
                <h3 class="text-xl font-semibold mb-4">Feature 3</h3>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};
