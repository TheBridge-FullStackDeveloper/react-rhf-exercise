import { createContext, useContext, useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";



export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const {data: posts, isLoading, error} = usePosts();
    const [localPosts, setLocalPosts] = useState([]);

    useEffect(() => {
      if(posts) {
        setLocalPosts(posts);
      }
    }, [posts]);

  return (
    <PostsContext.Provider value={{posts: localPosts, setPosts: setLocalPosts, isLoading, error}}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  return useContext(PostsContext);
}

