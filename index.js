/******************************************
 * 
 * We need to create an Employee page.  We will read the data from either 
 * the included people.js or from the randomuser api.  Once we have the data
 * we will need to .map() over it to simplify the structure.  This new structure
 * will match our UI. Next we will need to create a "Card" for each employee using
 * the included html (section class="avatar").  After all of the people are displayed, 
 * add a way for the user to filter the data by the first letter of the last name.
 * Last, add a "Reset" button that will reset the page to showing all of the
 * employees.  When the page is called using the random user api, when you refresh
 * the page the employee list should change every time. When reading the data from 
 * the people.js file, the list will remain static.  The current code is set to read
 * from the API not the file.  
 * 
 *********************************************/

// Destructure the user.location object and convert to string
// Because this string is being added as HTML it is OK to include 
// the <br/> elements inside it.  If it was innerText it WOULD NOT work.
const parseAddress = ({street, city, state, postcode}) => `${street}<br/>${city} ${state}<br/>${postcode}`;
// Convert the user.name object to a string
const parseName = (name) => `${name.first} ${name.last}`;

// Grab the user properties that are needed and create a new "person" object
const createPerson = ({name, location, email, phone, picture}) => {
    // update the name and location data
    name = parseName(name);
    location = parseAddress(location);
    // return the new "person" object
    return {
        picture: picture.large || picture.medium || picture.thumbnail,
        name,
        location,
        email, 
        phone
    };
};

// Convert a "person" object from above into a section class="avatar" 
// HTML Element
const createAvatar = (person) => {
    // Destructure the person object into the individual properties
    const {name, location, email, phone, picture} = person;
    // create the element
    const el = document.createElement('section');
    // add the avatar class
    el.classList.add('avatar');
    // set up the rest of the avatar with the user data
    el.innerHTML =`
    <div class="avatar-image">
        <img src="${picture}" alt="${name}"/>
    </div>
    <div class="avatar-content">
        <h2 class="avatar-header">${name}</h2>
        <div class="avatar-location">${location}</div>
        <ul class="avatar-contact-list">
            <li class="avatar-contact-list-item">
                <a href="mailto:${email}">✉</a>
            </li>
            <li class="avatar-contact-list-item">
                <a href="tel:${phone}">✆</a> 
            </li>
        </ul>
    </div>`;
    // return the new HTML Element
    return el;
};

// Create a button element and set the innerText property
// Used for mapping a letter into a buttsson
const createLetterBtn = letter => {
    const el = document.createElement('button');
    el.innerText = letter;
    return el;
};

// Create an array of the letters 
// Get the letter container HTML element
// Convert the letters to buttons and add to page
// Create a rest button
// Add a click handler on the container to handle the user clicks
const addLetters = () => {
    // create an array of the letters by splitting the string to create the array
    const allletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = allletters.split('');
    // get the letter container
    const letterContainer = document.querySelector('.letters');
    // convert each letter into HTML Element
    const letterButtons = letters.map(createLetterBtn);
    // Add the new element to the page
    letterButtons.forEach( (el)=> letterContainer.appendChild(el));
    // create a "Reset button" and class and add to page
    const btn = createLetterBtn('Reset');
    btn.classList.add('clear');
    letterContainer.appendChild(btn);
    // add a single click handler on the container to call our filtering function
    // for all of the buttond we added
    letterContainer.addEventListener('click', filterListByLetter);
};


// When the user clicks a letter filter the employee data to only show users
// whos last name start with the selected letter
const filterListByLetter = (e) => {
    // if we didnt click on a real button then quit
    if (e.target === e.currentTarget) {
        return;
    }
    // get the letter from the button that was clicked
    const letter = e.target.innerText;
    // grab our data and filter it to our simpler structure
    // this way if there is no filter or the reset button is clicked
    // all of the data is returned 
    let updated = userData.map(createPerson);

    // If its not the Reset button then its a specific letter
    if (letter !== 'Reset') {
        // filter our user data by checking the first letter of the last name
        updated = updated.filter( ({name}) => {
            const [first,last] = name.split(' ');
            return last.charAt(0).toUpperCase() === letter;
        });            
    };
    // clean out our current employee list
    container.innerHTML='';

    if (updated.length) {
        // if we have records matching our filter add them to the page
        // by converting them to DOM elements
        updated.forEach( (el) => {
            container.appendChild(createAvatar(el));
        });                    
    } else {
        // No records matched our filter
        container.innerHTML='<h2>No Results</h2>';
    }
};

// Global variables to hold our main container and our user data
let userData, container;

// Function called when the HTML (DOM) has fully loaded
const start =() => {
    // set our container up
    container = document.querySelector('.container');
    
    // grab data from the API
    fetch(`https://randomuser.me/api/?results=50`)
    .then(res => res.json()) // convert to JSON (JS Obnject Notation)
    .then (res => {
        // update our global variable with the results
        userData = res.results;
        // Map the results to HTML Elements
        const userAvatars = userData.map(createPerson).map(createAvatar);
        // Add them to the page
        userAvatars.forEach( user => container.appendChild(user));    
    });
    //Add the letters and their functionality to the page
    addLetters();
}

// When the HTML page has loaded run the start function
// This kicks off the whole process!
document.addEventListener('DOMContentLoaded', start);
