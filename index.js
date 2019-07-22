
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

const employeeContainer = document.querySelector('.container');


// // Create employee section
// const picture = 'https://randomuser.me/api/portraits/men/3.jpg';
// const name = "albert fleming";
// const locationText = "7693 westmoreland street<br/> arklow, offaly<br/>54657";
// const mail = 'mailto:albert.fleming@example.com';
// const pNum = 'tel:071-584-8322'

// function createEmployee(picture, name, locationText, mail, pNum) {
//     const newSection = document.createElement('section');
//     newSection.classList.add('avatar');
    
//     const avatarImageDiv = document.createElement('div');
//     avatarImageDiv.classList.add('avatar-image');
//     newSection.appendChild(avatarImageDiv);
    
//     const newImg = document.createElement('img');
//     newImg.setAttribute('src', picture);
//     newImg.setAttribute('alt', name);
//     avatarImageDiv.appendChild(newImg);
    
//     const avatarContentDiv = document.createElement('div');
//     avatarContentDiv.classList.add('avatar-content');
//     newSection.appendChild(avatarContentDiv);
    
//     const nameHeader = document.createElement('h2');
//     nameHeader.classList.add('avatar-header');
//     nameHeader.innerHTML = name;
//     avatarContentDiv.appendChild(nameHeader);
    
//     const locationDiv = document.createElement('div');
//     locationDiv.classList.add('avatar-location');
//     locationDiv.innerHTML = locationText;
//     avatarContentDiv.appendChild(locationDiv);
    
//     const contactList = document.createElement('ul');
//     contactList.classList.add('avatar-contact-list');
//     avatarContentDiv.appendChild(contactList);
    
//     const listItem1 = document.createElement('li');
//     listItem1.classList.add('avatar-contact-list-item');
//     contactList.appendChild(listItem1);
    
//     const contactEmail = document.createElement('a');
//     contactEmail.setAttribute('href', mail);
//     contactEmail.innerHTML = '✉';
//     listItem1.appendChild(contactEmail);
    
//     const listItem2 = document.createElement('li');
//     listItem2.classList.add('avatar-contact-list-item');
//     contactList.appendChild(listItem2);
    
//     const contactNumber = document.createElement('a');
//     contactNumber.setAttribute('href', pNum);
//     contactNumber.innerHTML = '✆';
//     listItem2.appendChild(contactNumber);

//     employeeContainer.appendChild(newSection);
    
//     // console.log(newSection);
// }
    
// // Populate for each employee
// userData.results.forEach(makeEmployee);
// function makeEmployee(element) {
    // createEmployee(element.picture.large, element.name.first + " " + element.name.last, element.location.street +'<br>' + element.location.city + element.location.state + "<br>" + element.location.postcode, element.email, element.cell);
// }


// Populate for each employee
function createEmployee2(el) {
    const newSection2 = document.createElement('div');
    newSection2.innerHTML =`
        <section class="avatar">
            <div class="avatar-image">
                <img src="${el.picture}" alt="${el.name}"/>
            </div>
            <div class="avatar-content">
                <h2 class="avatar-header">${el.firstName} ${el.lastName}</h2>
                <div class="avatar-location">
                ${el.address}
                </div>
                <ul class="avatar-contact-list">
                    <li class="avatar-contact-list-item">
                        <a href=${el.email}>✉</a>
                    </li>
                    <li class="avatar-contact-list-item">
                        <a href=${el.phone}>✆</a> 
                    </li>
                </ul>
            </div>
        </section>`;
        employeeContainer.appendChild(newSection2);
}

// Map dataset to return the data that we need.
const updatedData = userData.results.map(element => { 
    return {
    'picture':element.picture.large, 
    'firstName': element.name.first,
    'lastName': element.name.last, 
    'address': element.location.street +'<br>' + element.location.city + element.location.state + "<br>" +          element.location.postcode, 
    'email': element.email, 
    'phone': element.cell}})

// Create the employee set using the new Map dataset
// updatedData.map(createEmployee2);

// Create Search Bar
const body = document.querySelector('body');

body.style.display = 'flex';
body.style.flexDirection = 'column';
employeeContainer.style.order = '5';

const searchBarContainer = document.createElement('div');
searchBarContainer.style.backgroundColor = "pink";
searchBarContainer.style.height = '100px';
searchBarContainer.style.width = '100vw';
searchBarContainer.style.order = '1';
body.appendChild(searchBarContainer);

const searchBarList = document.createElement('ol');
searchBarList.style.height = '100px';
searchBarList.style.display = 'flex';
searchBarList.style.margin = '0';
searchBarList.style.padding = '0';
searchBarList.style.justifyContent = 'space-evenly';
searchBarList.style.alignItems = 'center';
searchBarList.addEventListener('click', filterByLastName);
searchBarContainer.appendChild(searchBarList);

const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'other', 'reset'];
Letters.forEach( let => {
    const searchBarLetters = document.createElement('li');
    searchBarLetters.classList.add('letter');
    searchBarLetters.style.listStyle = 'none';
    searchBarLetters.style.color = 'black';
    searchBarLetters.style.backgroundColor = 'white';
    searchBarLetters.style.padding = '10px';
    searchBarLetters.style.border = 'black 1px solid'

    searchBarList.appendChild(searchBarLetters);
    searchBarLetters.innerHTML = let;
})

// Filter by Last Name
function filterByLastName(event) {
    // If an item (not the container) is clicked
    if (event.target !== event.currentTarget) {
        // if 'reset' is selected
        if (event.target.innerHTML === 'reset') {
            employeeContainer.innerHTML = ""
            updatedData.map(createEmployee2)
        // if 'other' is selected, populate with non-alphabet names
        } else if (event.target.innerHTML === 'other') {
            const filteredUpdatedData = updatedData.filter(
                item => !Letters.includes(item.firstName[0].toUpperCase())
                );
            employeeContainer.innerHTML = ""
            filteredUpdatedData.map(createEmployee2)
        }
        // else, populate according to the selected letter
        else {
            const filteredUpdatedData = updatedData.filter(
                item => event.target.innerHTML.toLowerCase() === item.lastName.toLowerCase()[0]
                );
            employeeContainer.innerHTML = ""
            filteredUpdatedData.map(createEmployee2)
        }
    }
}

// Default display All
updatedData.map(createEmployee2);