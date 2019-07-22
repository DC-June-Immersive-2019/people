document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});

// let picture = userData.results[0].picture;
// // console.log(picture)
// // let name = userData.results[0].name
// // console.log(name.first)
// let location1 = userData.results[0].location
// // console.log(userData.results[0].location.street)
// let email = userData.results[0].email
// // console.log(userData.results[0].email)
// let telephone = userData.results[0].phone
// // console.log(userData.results[0].phone)

const infoArray = userData.results.map ( (user) => {
    return {
        picture :`${user.picture.thumbnail}`,
        // console.log(picture.thumbnail)
        name: `${user.name.first} ${user.name.last}`,
        location1:`${user.location.street} 
        ${user.location.city} ${user.location.state} 
        ${user.location.postcode}`,
        email : `${user.email}`,
        telephone :`${user.phone}`
    }
});
// console.log(infoArray[1])
const container = document.querySelector('.container')
//destructuring:: 
infoArray.forEach(({picture,name,location1,telephone, email}) => {
    const card = document.createElement('section')
    card.classList.add("avatar")
    card.innerHTML = `<div class="avatar-image">
    <img src="${picture}" alt="${name}"/>
</div>
<div class="avatar-content">
    <h2 class="avatar-header">${name}</h2>
    <div class="avatar-location">
        ${location1}
    </div>
    <ul class="avatar-contact-list">
        <li class="avatar-contact-list-item">
            <a href="mailto:${email}">✉</a>
        </li>
        <li class="avatar-contact-list-item">
            <a href="tel:${telephone}">✆</a> 
        </li>
    </ul>
</div>`;
container.appendChild(card)
});
    

/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page

2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/