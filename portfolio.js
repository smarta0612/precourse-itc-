/*fetching picture from my github*/

const GITHUB_URL = "https://api.github.com/users/smarta0612";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

  /*profile picture change on click*/

 function change() {
    const element = document.getElementById('my-name');

    if (element.className === "my-name") {
        element.className = "my-name-change";
    }
    else if ( element.className === "my-name-change") {
        element.className = 'my-name';
    }
}
/**footer */


var input = ['HTML','CSS','JavaScript'];
var languagesPlaceholder = document.getElementById("languagesPlaceholder")
var last = input.pop();
languagesText = input.join(', ') + ' and ' + last+ ".";
languagesPlaceholder.innerText =  languagesText;
