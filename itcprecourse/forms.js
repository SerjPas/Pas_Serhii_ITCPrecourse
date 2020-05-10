var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e) {
    e.preventDefault();
    sendData();
});

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendData() {
    var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];

    urlEncodedDataPairs.push(
        encodeURIComponent("name") +
        "=" +
        encodeURIComponent(form.querySelector("[name='name']").value)
    );
    urlEncodedDataPairs.push(
        encodeURIComponent("send_to") +
        "=" +
        encodeURIComponent(form.querySelector("[name='send_to']").value)
    );
    urlEncodedDataPairs.push(
        encodeURIComponent("email") +
        "=" +
        encodeURIComponent(form.querySelector("[name='email']").value)
    );
    urlEncodedDataPairs.push(
        encodeURIComponent("phone") +
        "=" +
        encodeURIComponent(form.querySelector("[name='phone']").value)
    );

    urlEncodedDataPairs.push(
        encodeURIComponent("comments") +
        "=" +
        encodeURIComponent(form.querySelector("[name='comments']").value)
    );
    


    // Set up our request
    XHR.open(form.getAttribute("method"), form.getAttribute("action"));

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Finally, send our data.
    XHR.send(urlEncodedData);
}
