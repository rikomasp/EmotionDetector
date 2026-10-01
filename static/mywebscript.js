function RunSentimentAnalysis() {
    let text = document.getElementById("textToAnalyze").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/emotionDetector?textToAnalyze=" + encodeURIComponent(text), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("system_response").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
