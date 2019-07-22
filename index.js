document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});

const container = document.querySelector('.container')

fetch('https://randomuser.me/api?results=50')
.then(res => res.json())
.then (res => {
   userData = (res)

const infoArray = userData.results.map ( (user) => {
    return {
        picture :`${user.picture.large}`,
        name: `${user.name.first} ${user.name.last}`,
        location1:`${user.location.street} 
        ${user.location.city} ${user.location.state} 
        ${user.location.postcode}`,
        email : `${user.email}`,
        telephone :`${user.phone}`
    }

});


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

})





















// const search = document.querySelector('.search');
// search.addEventListener('click', ()=>{
//     console.log('click')
// });

// const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const order = document.createElement('ul')
// order.style.display="flex"
// order.style.listStyle = 'none'
// search.style.justifyContent = 'space-evenly'
// search.appendChild(order)
// search.style.border = "1px solid white"
// search.style.display = 'flex'

// alphaArray = alpha.split("")
// console.log(alphaArray)

// alphaArray.forEach((i) => {
//     const btn = document.createElement('li')
//     btn.innerHTML = i
//     order.appendChild(btn)
    
// })







/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page

2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/