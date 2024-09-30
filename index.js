// Code your solutions in this file
function writeCards(names) {
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
        let message;
        switch (names[i]) {
            case "Guadalupe":
                message = "Thank you, Guadalupe, for the wonderful surprise gift!";
                break;
            case "Ollie":
                message = "Thank you, Ollie, for the wonderful surprise gift!";
                break;
            case "Aki":
                message = "Thank you, Aki, for the wonderful surprise gift!";
                break;
            default:
                message = `Thank you, ${names[i]}, for your support!`;
        }
        messages.push(message);
    }

    return messages;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}


countDown(5);
