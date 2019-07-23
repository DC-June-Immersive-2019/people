
document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});
const container = document.querySelector(".container");


// letters.addEventListener('click',e){

// }
    //fetch(`https://randomuser.me/api/?results=50`);

    
function gumDrops(userDataArray){
    container.innerHTML = "";
        userDataArray.forEach(function(result, person) {
            let location = result.location.street+ " " +result.location.city + " " +result.location.state
            let email = result.email;
            let picture = result.picture.large;
            let phone = result.phone;
            let fullName = result.name.first+ " " +result.name.last;
            const createAvatar = document.createElement("section");
            createAvatar.classList.add("avatar");
            createAvatar.innerHTML = `<div class="avatar-image">
            <img src="${picture}" alt="${fullName}"/>
            </div>
            <div class="avatar-content">
                <h2 class="avatar-header">${fullName}</h2>
                <div class="avatar-location">
                    ${location}
                </div>
                <ul class="avatar-contact-list">
                    <li class="avatar-contact-list-item">
                        <a href="mailto:${email}">✉</a>
                    </li>
                    <li class="avatar-contact-list-item">
                        <a href="tel:${phone}">✆</a> 
                    </li>
                </ul>
            </div>`
            container.appendChild(createAvatar);
            })
    }


function loadAvatar(){
    fetch('https://randomuser.me/api?results=50')
    .then(res => res.json())
    .then (res => {
      const userData = (res)
      const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let letterDisplay = document.createElement("div");
letters.forEach(e => {
    let letterDisplaybtn = document.createElement("button");
    letterDisplaybtn.innerText = e;
    letterDisplay.appendChild(letterDisplaybtn);
    letterDisplaybtn.addEventListener("click", function(i){
        //userData.name.last.split("");
        const filteredUserArray = userData.results.filter(person => i.target.innerHTML.toLowerCase() === person.name.last[0])
        gumDrops(filteredUserArray);
    })
});
document.querySelector(".lettercontainer").appendChild(letterDisplay);







    gumDrops(userData.results)
});

}

console.log()



    // div = container.appendChild(letters);
    // console.log(letters)
    
    // result.name.last.split()
    //if(split value = "letter user clicked on")
    //return letters




loadAvatar();
//container.appendChild(avatar);
//console.log(avatar);

//const image = document.querySelector('avatar-image');

/*const name
const location
const email
const phone
*/
/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/
    