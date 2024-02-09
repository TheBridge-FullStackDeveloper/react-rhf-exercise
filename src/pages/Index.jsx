export function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white bg-gray-900">
      <div className=" border-white border-2 rounded-lg p-8">
        <p>This is a web application of a blog</p>
        <br />
        <p>These are the actions you can do:</p>
        <ul className="m-6">
          <li className="list-disc">View posts</li>
          <li className="list-disc">View the post detail</li>
          <li className="list-disc">Create a new post</li>
          <li className="list-disc">
            Navigate through the views with the bar above
          </li>
        </ul>
      </div>
    </div>
  );
}
