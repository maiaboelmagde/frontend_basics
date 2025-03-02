async function getPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const posts = await response.json();
      const firstFivePosts = posts.slice(0, 5);
      console.log(firstFivePosts);
    } catch (error) {
      console.log("Error fetching posts:", error.message);
    }
  }
  
  getPosts();