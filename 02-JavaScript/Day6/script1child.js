
const textElement = document.getElementById('text');
const textContent = textElement.innerText;
textElement.innerText = ''; 

let index = 0;

function printChar() {
    if (index < textContent.length) {
    textElement.innerText += textContent[index];
    index++;
    scrollTo(0,document.body.scrollHeight - window.innerHeight +30);
    setTimeout(printChar, 20); 
}

}
    printChar(); 


