import { ENCRYPTION_KEY } from "./constants.js";

export function validateText (text) {
    if (!text) return;

    const inputInstructions = document.getElementById('input-instructions');

    //Normalizes the text to decompose and get the unicode of special characters
    const normalizedText = text.normalize('NFD');
    
    //Checks if text contains uppercase characters or diacritics like accents or glyphs.
    const isTextInvalid = /[A-Z]|\p{Diacritic}/gu.test(normalizedText);

    inputInstructions.style.color = isTextInvalid ? 'red' : null; 
    inputInstructions.style.fontWeight = isTextInvalid ? 900 : null; 

    return isTextInvalid;
}

export function showResults(){
    const resultTextContainer = document.getElementById('result-text-container');
    const noResultsContainer = document.getElementById('no-results-container');
    
    resultTextContainer.style.display = 'flex';
    noResultsContainer.style.display ='none';
}

export function hideResults() {
    const resultTextContainer = document.getElementById('result-text-container');
    const noResultsContainer = document.getElementById('no-results-container');

    resultTextContainer.style.display = 'none';
    noResultsContainer.style.display = null;
}

export function encryptText (text) {
    //Each element of the array stores the characters or set of characteres
    //that are result of the encryption.
    const encryptedText = [];

    //Checks that the current character in the loop
    //is included as property in the ENCRYPTION_KEY object and
    //pushes the respected value of the property to the array that contains each character
    //of the encrypted text.
    for (const character of text) {
        if (ENCRYPTION_KEY.hasOwnProperty(character)) {
            encryptedText.push(ENCRYPTION_KEY[character]);
        } else {
            encryptedText.push(character);
        }
    }

    //Shows the encryption result panel
    showResults();
    
    const resultTextElement = document.getElementById('result-text');

    //Add the encyrption result to the result panel
    resultTextElement.innerHTML = encryptedText.join('');
}

export function unencryptText (text){
    //Stores the initial text that will be unencrypted.
    let unencryptedText = text;

    //It will replace each character that is included in
    //as a property in the ENCRYPTION_KEY object with it's respected value.
    for (const key in ENCRYPTION_KEY) {
        unencryptedText = unencryptedText.replaceAll(ENCRYPTION_KEY[key],key);
    }

    //Shows the encryption result panel
    showResults();
    
    const resultTextElement = document.getElementById('result-text');

    //Add the encyrption result to the result panel
    resultTextElement.innerHTML = unencryptedText;
}
