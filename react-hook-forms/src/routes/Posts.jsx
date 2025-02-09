import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { Link } from "react-router";



const Posts = () => {
   const {posts, isLoading, error} = useContext(PostsContext);

   if (isLoading) return <h1>Loading...</h1>;
   if (error) return <h1>Error loading posts</h1>;
   if (!posts) return <h1>No posts available</h1>
  
    return (
      <>
        <div>
          <h1>📋 Posts</h1>
          <ul style={{textDecoration:'none', listStyle:'none', display:'flex', alignItems:'center'}} >
            {posts.map(post =>(
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default Posts;