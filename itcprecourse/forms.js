var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendData();
});

function sendData() {
    const XHR = new XMLHttpRequest();
    let urlEncodedData = "";
    let urlEncodedDataPairs = [];

    urlEncodedDataPairs.push(
        encodeURIComponent("First Name: ") +
        "=" +
        encodeURIComponent(form.querySelector("[name='name']").value)
    );
    urlEncodedDataPairs.push(
        encodeURIComponent("Last Name: ") +
        "=" +
        encodeURIComponent(form.querySelector("[name='lastname']").value)
    );
    // urlEncodedDataPairs.push(
    //     encodeURIComponent("send_to") +
    //     "=" +
    //     encodeURIComponent(form.querySelector("[name='send_to']").value)
    // );
    urlEncodedDataPairs.push(
        encodeURIComponent(" Email: ") +
        "=" +
        encodeURIComponent(form.querySelector("[name='email']").value)
    );
    urlEncodedDataPairs.push(
        encodeURIComponent("Comment:") +
        "=" +
        encodeURIComponent(form.querySelector("[name='comments']").value)
    );
    urlEncodedDataPairs.push(
        encodeURIComponent("Phone number:") +
        "=" +
        encodeURIComponent(form.querySelector("[name='phone']").value)
    );

    let newEncode = decodeURIComponent(urlEncodedDataPairs.toString());
    console.log(newEncode.split('=').join(''));


}


