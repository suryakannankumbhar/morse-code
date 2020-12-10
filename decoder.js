var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#output");

var serverURL = "http://api.funtranslations.com/translate/morse2english.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("The Server Is Down!! Kindly Come Back After Some Time!!")
}

function clickHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(respone => respone.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
    
};

buttonTranslate.addEventListener("click", clickHandler)