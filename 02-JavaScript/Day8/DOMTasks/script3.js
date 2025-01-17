document.querySelector("[type='button']").addEventListener("click", () => {
    const selectedImage = document.querySelector("input[name='pic']:checked");
    const personalMessage = document.querySelector("[type='text']").value.trim();

    if (!selectedImage) {
        alert("Please select an image!");
        return;
    }

    if (personalMessage === "") {
        alert("Please write a personal message!");
        return;
    }

    
    const imgSrc = selectedImage.getAttribute("src");

    
    const childWindow = window.open(
        "",
        "CardWindow",
        "width=400,height=500,scrollbars=no,resizable=no"
    );

    console.log(imgSrc);
    childWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Get Well Soon Card</title>
            <style>
                body {
                    background-color: bisque;
                    color: rgb(37, 126, 97);
                    text-align: center;
                    margin-top: 20px;
                }
                img {
                    height: 400px;
                    width: 300px;
                }
                p {
                    font-size: x-large;
                    margin: 20px;
                }
                button {
                    margin-top: 30px;
                    padding: 10px 20px;
                    font-size: medium;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <img src="${imgSrc}" alt="Selected Image">
            <p>${personalMessage}</p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    
    childWindow.document.close();
});
