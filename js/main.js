import { validateText, encryptText, unencryptText,hideResults } from "./utils.js";

//Getting DOM elements by ID
const textArea = document.getElementById('text-area');

const resultTextElement = document.getElementById('result-text');

const encryptButton = document.getElementById('encrypt-button');
const unencryptButton = document.getElementById('unencrypt-button');
const copyButton = document.getElementById('copy-button');

encryptButton.addEventListener('click',() => {
    const textAreaValue = textArea.value.trim();
    const isTextInvalid = validateText(textAreaValue);

    if (textAreaValue && !isTextInvalid){
        encryptText(textAreaValue);
        
    } else {
        hideResults();
        resultTextElement.innerHTML = '';
    }
})

unencryptButton.addEventListener('click',() => {
    const textAreaValue = textArea.value.trim();
    const isTextInvalid = validateText(textAreaValue);

    if (textAreaValue && !isTextInvalid){
        unencryptText(textAreaValue);
    } else {
        hideResults();
        resultTextElement.innerHTML = '';
    }
})

copyButton.addEventListener('click', async () => {
    const resultText = resultTextElement.innerHTML;

    await navigator.clipboard.writeText(resultText);
})