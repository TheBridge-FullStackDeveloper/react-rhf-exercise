import axios from 'axios';

const API_URL = 'http://localhost:3001/posts';

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPostById = async (postId) => {
  const response = await axios.get(`${API_URL}/${postId}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};
