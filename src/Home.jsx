const Home = () => (
<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
    <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
        Welcome to Blog Posts
        </h1>
        <p className="text-xl text-gray-600 mb-8">
        Discover, create, and share amazing blog posts with our community.
        </p>
        <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>
            <p className="text-gray-600 mb-6">
            Share your thoughts, read interesting stories, and engage with other writers.
            </p>
            <div className="flex justify-center gap-4">
            <a
                href="/posts"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Browse Posts
            </a>
            <a
                href="/create-post"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-200"
            >
                Create Post
            </a>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
);

export default Home;
