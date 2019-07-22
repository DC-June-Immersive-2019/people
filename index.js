
document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});

/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/


const container = document.querySelector('.container');
fetch('https://randomuser.me/api/?results=50')
.then(res => res.json())
.then (res => {
    userData = (res)

const newArray = userData.results.map( (user) => {
    return {
        picture : user.picture.large || user.picture.medium || user.picture.thumbmail,
        name : `${user.name.first} ${user.name.last}`,
        location : `${user.location.street} 
        ${user.location.city} ${user.location.state}
        ${user.location.postcode}`,
        email : `${user.email}`,
        phone : `${user.phone}`
    }
    
});

// Destructuring: 
newArray.forEach( ({picture, name, location, email, phone}) => {
    const avatar = document.createElement('section');
    avatar.classList.add('avatar')
    avatar.innerHTML = `<div class="avatar-image">
        <img src="${picture}" alt="${name}"/>
    </div>
    <div class="avatar-content">
        <h2 class="avatar-header">${name}</h2>
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
    </div>`;

container.appendChild(avatar)
})

})