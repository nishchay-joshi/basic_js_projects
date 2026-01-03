function generatePassword(){

    const passwordLen = document.getElementById("Length").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const passwordResult = document.getElementById("passwordResult");

    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLen <= 0){
        passwordResult.textContent = "Password length must be atleast 1";
        return;
    }

    if(allowedChars.length === 0){
        passwordResult.textContent = "Please select atleast one option";
        return;
    }

    for(let i = 0; i < passwordLen; i++){
        const randomIndex = Math.floor((Math.random() * allowedChars.length));
        password += allowedChars[randomIndex];
    }

    passwordResult.textContent = password;
}

