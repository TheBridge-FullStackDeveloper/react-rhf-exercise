async function GetPosts() {
    const url = "http://localhost:3000/posts";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error(error.message);
    }
  }

  export default GetPosts
  