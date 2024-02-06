const postApiUrl = "http://localhost:3001/posts";

export const fetchData = async () => {
  const response = await fetch(postApiUrl);
  const jsonData = await response.json();
  return jsonData;
};
