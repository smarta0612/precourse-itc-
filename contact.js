/*disable button before form filled*/ 

function success() {
    if(document.getElementById("fname").value==="") {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}

// var elements = document.getElementById("contact").elements;
const submitBtn = document.getElementById('button');

submitBtn.addEventListener('click', function() {
    var fname = document.getElementById("fname").value;
    console.log("First name: " + fname);

    var lname = document.getElementById("lname").value;
    console.log("Last name: " + lname);

    var email = document.getElementById("email").value;
    console.log("Email: " + email);

    var subject = document.getElementById("subject").value;
    console.log("Comment: " + subject);

    var never = document.getElementById("never").value;
    console.log("Never gonna " + never);

    return false
});

/**footer */

var input = ['HTML','CSS','JavaScript'];
var languagesPlaceholder = document.getElementById("languagesPlaceholder")
var last = input.pop();
languagesText = input.join(', ') + ' and ' + last + ".";
languagesPlaceholder.innerText =  languagesText;