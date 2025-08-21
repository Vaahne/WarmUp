// const request = new XMLHttpRequest(); // create new XML Http request object
// request.open("GET","http://www.example.com/myFile.json",true);
// request.send();

// alert("hello")

let request;

document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

function testRequest() {
    request = new XMLHttpRequest();

    if (!request) {
        alert("Failed to create an XMLHttpRequest Object.");
        return false;
    }

    request.onreadystatechange = alertResponse;
    // request.open("GET", "test.html");
    request.open("GET", "test1.xml");
    request.send();
}

 function alertResponse() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            // alert(request.responseText);
            const xmlDoc = request.responseXML;
            const doc_root = xmlDoc.querySelector("root");
            let data = doc_root.firstChild.data;

            alert(data);
        } else {
            alert("The request returned a status other than 200 OK: " + request.status);
        }
    }
}