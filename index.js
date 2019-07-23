// document.addEventListener('DOMContentLoaded', () => {
//     console.log(`It's better to burn out than to fade away.`);
// }); test

const container = document.querySelector('.container');
fetch(`https://randomuser.me/api/?results=50`)
.then(res => res.json())
.then(res => {
    const userData = res.results.map(loadAvatar);
    const startLetter = document.querySelectorAll('.tab');
    const selectAvatar = document.querySelectorAll('section');
    
    const chooseAvatar = (e) => {
        const selector = document.querySelectorAll('section');
        selector.forEach(function(select) {
            container.removeChild(select);
        })
        el = e.target;
        selectAvatar.forEach(function(select2) {
            if (el.id.toLowerCase() === select2.id) {
                container.appendChild(select2);
            } else if (el.id === 'all') {
                container.appendChild(select2);
            }
        });
    }

    startLetter.forEach(function(letter){
        letter.addEventListener('click', chooseAvatar);
    });
})

function loadAvatar (result) {
    let avatarImage = result.picture.large;
    let avatarHeader = result.name.first + " " + result.name.last;
    let avatarStreet = result.location.street;
    let avatarState = result.location.city + ", " + result.location.state;
    let avatarCode = result.location.postcode;
    let avatarEmail = result.email;
    let avatarPhone = result.phone;
    const section = document.createElement('section');
    section.classList.add('avatar');
    section.id = result.name.last[0];
    section.innerHTML = `<div class="avatar-image">
            <img src="${avatarImage}" alt="${avatarHeader}"/>
        </div>
        <div class="avatar-content">
            <h2 class="avatar-header">${avatarHeader}</h2>
            <div class="avatar-location">${avatarStreet}<br/>${avatarState}<br/>${avatarCode}
            </div>
            <ul class="avatar-contact-list">
                <li class="avatar-contact-list-item">
                    <a href="mailto:${avatarEmail}">✉</a>
                </li>
                <li class="avatar-contact-list-item">
                    <a href="tel:${avatarPhone}">✆</a> 
                </li>
            </ul>
        </div>`
    container.appendChild(section);
}

/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/