function delayedMessage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello, World!");
      }, 3000);
    });
}

delayedMessage().then((message) => {
    console.log(message);
});