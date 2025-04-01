// gives an alert
function helloWorld() {
    alert("Hello, world!");
}

// makes text bigger
function makeBigger() {
    document.getElementById("textInput").style.fontSize="24pt";
}

// applies style to buttons
function fancify() {
    const textArea = document.getElementById("textInput");
    const fancy = document.getElementById("fancyShmancy");
    
    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "";
    }
}

// adds -Moo to the last word of each sentence
function mooify() {
    const textArea = document.getElementById("textInput");
    let text = textArea.value;
    
    text = text.toUpperCase();
    
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    text = sentences.join(". ");
    
    textArea.value = text;
}