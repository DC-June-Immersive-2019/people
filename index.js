
let contactList;
document.addEventListener("DOMContentLoaded", () => {
    console.log(`It's better to burn out than to fade away.`);
    const container = document.querySelector(".container");
    const createDiv = person => {    
    console.log(person.lastname);
    const book = document.createElement("section");
    book.classList.add("avatar");
    container.appendChild(book);
    // console.log(user.name.first)
    book.innerHTML = `
    <section class="avatar">
    <div class="avatar-image">
    <img src="${person.picture}" alt="${person.firstname} "/>
    </div>
    <div class="avatar-content">
    <h2 class="avatar-header">${person.firstname} ${person.lastname}</h2>
    <div class="avatar-location">
    ${person.location}
    </div>
    <ul class="avatar-contact-list">
    <li class="avatar-contact-list-item">
    <a href="${person.email}">✉</a>
    </li>
    <li class="avatar-contact-list-item">
    <a href=${person.cell}>✆</a> 
    </li>
    </ul>
    </div>
    </section>                         
    `;
    console.log(person.lastname);
    };

const displayContactList = (contacts) => {
    container.innerHTML = '';
    contacts.forEach(user => {
        createDiv(user);
    });
}
const boxx = document.createElement("div");
const letters = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
];

document.body.insertBefore(boxx, container);
boxx.classList.add("look");

const chosen = letters.map(letter => {
    return `<button class = "target">${letter}</button>`;
});
chosen.forEach(button => {
    boxx.innerHTML += button;
}); 
boxx.innerHTML += `<button class="restart">Reset</button>`;
let reset = e => {
    displayContactList(contactList)  
};
const restart = document.querySelector(".restart");
restart.addEventListener("click",reset);
const choose = e => {
// When a button is pressed the list is filtered by lastnames beginning with that letter
let letterChose = e.target.innerHTML;
const updated = contactList.filter(person => {
    return person.lastname[0].toUpperCase() === letterChose;
    });
    displayContactList(updated);
};
const selected = document.querySelectorAll(".target");
selected.forEach(letter => {
letter.addEventListener("click", choose);
});


fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then (res => {
            return res.results.map(user => {
                return {
                    firstname: `${user.name.first}`,
                    lastname: `${user.name.last}`,
                    location: `${user.location.street}</br>${user.location.city} ${
                    user.location.state
                    }</br> ${user.location.postcode}`,
                    email: `${user.email}`,
                    phone: `${user.cell}`,
                    picture: `${user.picture.thumbnail}`
                };
                });
        })
        .then (anything => 
            {
                contactList= anything
                displayContactList(contactList)
            })

});





/*
We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen
1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter */
