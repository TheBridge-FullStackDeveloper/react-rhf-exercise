async function PostCreate(data) {
    const url = "http://localhost:3000/posts";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ ...data, id: Date.now().toString()})
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

    } catch (error) {
      console.error(error.message);
    }
  }

  export default PostCreate
  