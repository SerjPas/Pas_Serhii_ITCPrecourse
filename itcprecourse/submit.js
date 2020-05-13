function check() {
    // Get our inputs and textareas
    const inputs = document.querySelectorAll("input:required");
    const textareas = document.getElementsByTagName("textarea");
    let filled = true; // We'll assume that all of the fields are full unless proven otherwise


    for (let i = 0; i < inputs.length; i++) { // Loop through all of the inputs first
        if (inputs[i].type === "text" && !inputs[i].value) { // If the input is a text field, check whether it is empty; if so, set filled to false
            filled = false;
        }

        for (let j = 0; j < textareas.length; j++) { // Now loop through all of the text areas; if any aren't filled in, set filled to false
            if (!textareas[j].value) {
                filled = false;
            }
        }

        if (filled) { // Check whether any of the fields are empty and enable/disable the button accordingly
            document.getElementById("submitButton").disabled = false;
        } else {
            document.getElementById("submitButton").disabled = true;
        }
    }
}

