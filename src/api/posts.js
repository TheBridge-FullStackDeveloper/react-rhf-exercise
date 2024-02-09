import { useParams } from "react-router-dom";

const postApiUrl = "http://localhost:3001/posts"

export const getPosts = async () => {
    const response = await fetch(postApiUrl)
    const jsonData = await response.json()
    return jsonData;
}

export const createPost = async (data) => {
    const response = await fetch(postApiUrl, {
        method: "POST",
        body: JSON.stringify(data),
    })
    return response
}


export const getPostById = async (postId) => {
    const response = await fetch(`${postApiUrl}/${postId}`);
    const jsonData = await response.json();
    return jsonData;
  };



