
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


// Create Search Bar
const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'other', 'reset'];

function makeSearchBar() {
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
    searchBarList.classList = "search-bar-list"
    searchBarList.style.height = '100px';
    searchBarList.style.display = 'flex';
    searchBarList.style.margin = '0';
    searchBarList.style.padding = '0';
    searchBarList.style.justifyContent = 'space-evenly';
    searchBarList.style.alignItems = 'center';
    searchBarContainer.appendChild(searchBarList);

    Letters.forEach( letter => {
        const searchBarLetters = document.createElement('li');
        searchBarLetters.classList.add('letter');
        searchBarLetters.style.listStyle = 'none';
        searchBarLetters.style.color = 'black';
        searchBarLetters.style.backgroundColor = 'white';
        searchBarLetters.style.padding = '10px';
        searchBarLetters.style.border = 'black 1px solid'

        searchBarList.appendChild(searchBarLetters);
        searchBarLetters.innerHTML = letter;
    })
}

// Check for entries
function emptyCheck(filteredUpdatedData){
    if (!filteredUpdatedData.length){
        const newSection2 = document.createElement('div');
        newSection2.style.textAlign='center';
        newSection2.innerHTML = "<h1 style = 'color:white'>No Results</h1>";
        employeeContainer.appendChild(newSection2)
    }
}

// Filter by Last Name
function filterByLastName(event, updatedData) {
    // If an item (not the container) is clicked
    if (event.target !== event.currentTarget) {
        // if 'reset' is selected
        if (event.target.innerHTML === 'reset') {
            employeeContainer.innerHTML = "";
            updatedData.forEach(createEmployee2);
        // if 'other' is selected, populate with non-alphabet names
        } else if (event.target.innerHTML === 'other') {
            const filteredUpdatedData = updatedData.filter(
                item => !Letters.includes(item.firstName[0].toUpperCase())
                );
            employeeContainer.innerHTML = "";
            emptyCheck(filteredUpdatedData);
            filteredUpdatedData.forEach(createEmployee2)
        }
        // else, populate according to the selected letter
        else {
            const filteredUpdatedData = updatedData.filter(
                item => event.target.innerHTML.toLowerCase() === item.lastName.toLowerCase()[0]
                );
            employeeContainer.innerHTML = "";
            emptyCheck(filteredUpdatedData);
            filteredUpdatedData.forEach(createEmployee2)
        }
    }
}


let userData;
const start = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then (res => res.json())
    .then (res => {
        makeSearchBar()
        const searchBarList = document.querySelector('.search-bar-list')
        const updatedData = res.results.map(element => { 
            return {
                'picture':element.picture.large, 
                'firstName': element.name.first,
                'lastName': element.name.last, 
                'address': element.location.street +'<br>' + element.location.city + element.location.state + "<br>" + element.location.postcode, 
                'email': element.email, 
                'phone': element.cell}
            })
        searchBarList.addEventListener('click', e => filterByLastName(e, updatedData));
        console.log(res)
        updatedData.forEach(createEmployee2);
    })
}
    
// main
start()