var namePattern = /^[a-zA-Z]+$/;
var phonePattern= /^[0-9]{8}$/;
var mobilePatter= /^(010|011|012|015)[0-9]{8}$/; 
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;


function validateInput(promptMessage, regexPattern, errorMessage) {
    let input = prompt(promptMessage);
    while (!regexPattern.test(input)) {
        alert(errorMessage);
        input = prompt(promptMessage);
    }
    return input;
}

function getColorChoice() {
    var choice;
    do{
     choice = prompt(
        "Choose the color:\n red\n green\n blue\n"
    );

   }while(choice != 'red' && choice != 'green' && choice != 'blue')

    return choice;
}





var myName = validateInput("Enter your name:", namePattern, "Enter a valid name (alphabets only).");
var phone = validateInput("Enter your phone number:", phonePattern, "Enter a valid phone number (8 digits).");
var mobile = validateInput("Enter your mobile number:", mobilePatter, "Enter a valid mobile number.");
var email = validateInput("Enter your email:",emailPattern, "Enter a valid email address.");

var color = getColorChoice();

document.write(`<p style="color: ${color};">Name: ${myName}</p>`);
document.write(`<p style="color: ${color};">Phone: ${phone}</p>`);
document.write(`<p style="color: ${color};">Mobile: ${mobile}</p>`);
document.write(`<p style="color: ${color};">Email: ${email}</p>`);
