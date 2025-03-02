function fetchData() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve("Data received");
        } else {
          reject("Network Error");
        }
    });
}
  
fetchData()
.then((data) => {
    console.log(data);
})
.catch((error) => {
  console.log("Error:", error);
});