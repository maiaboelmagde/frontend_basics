function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received");
      }, 2000);
    });
  }
  
fetchData()
.then((data) => {
    return data.toUpperCase();
})
.then((result) => {
    console.log(result);
});