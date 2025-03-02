function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        const firstFivePosts = posts.slice(0, 5);
        console.log(firstFivePosts);
    });
}
getPosts();