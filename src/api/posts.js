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




