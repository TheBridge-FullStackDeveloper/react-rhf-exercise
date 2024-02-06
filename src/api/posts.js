const postApiUrl = "http://localhost:5173/posts";

export const fetchData = async () => {
  const response = await fetch(postApiUrl);
  const jsonData = await response.json();
  return jsonData;
};
