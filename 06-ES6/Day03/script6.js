function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((posts) => {
        const firstFivePosts = posts.slice(0, 5);
        console.log(firstFivePosts);
    })
    .catch((error) => {
        console.log("Error fetching posts:", error.message);
    });
} 
getPosts();