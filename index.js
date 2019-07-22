document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});
const employeeContainer = document.querySelector('.container');

function createEmployee2(el) {
    const newEmployee = document.createElement('div');
    newEmployee.innerHTML = 
    `<section class="avatar">
<div class="avatar-image">
    <img src="${el.picture}" alt="${el.name}"/>
</div>
<div class="avatar-content">
    <h2 class="avatar-header">${el.name}</h2>
    <div class="avatar-location">
        ${el.location}
    </div>
    <ul class="avatar-contact-list">
        <li class="avatar-contact-list-item">
            <a href="${el.email}">✉</a>
        </li>
        <li class="avatar-contact-list-item">
            <a href="${el.phone}">✆</a> 
        </li>
    </ul>
</div>
</section>`;
    employeeContainer.appendChild(newEmployee);
};

// search bar
const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'other', 'reset'];

function createSearchBar() {
    const body = document.querySelector('body');

    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    employeeContainer.style.order = '5';

    const searchBarContainer = document.createElement('div');
    searchBarContainer.style.backgroundColor = "gray";
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

// check for entries
function checkEmpty(filteredBootyData){
    if(!filteredBootyData.length){
        const newEmployee = document.createElement('div');
        newEmployee.style.textAlign = 'center';
        newEmployee.innerHTML = "<h1 style = 'color:red'>Nada</h1>";
        employeeContainer.appendChild(newEmployee)
    }
}
// Filter by Name
function filterByName(event, bootyData) {
    // If an item (not the container) is clicked
    if (event.target !== event.currentTarget) {
        // if 'reset' is selected
        if (event.target.innerHTML === 'reset') {
            employeeContainer.innerHTML = ""
            bootyData.map(createEmployee2)
        // if 'other' is selected, populate with non-alphabet names
        } else if (event.target.innerHTML === 'other') {
            const filteredBootyData = bootyData.filter(
                item => !Letters.includes(item.name[0].toUpperCase())
                );
            employeeContainer.innerHTML = ""
            filteredBootyData.map(createEmployee2)
        }
        // else, populate according to the selected letter
        else {
            const filteredBootyData = bootyData.filter(
                item => event.target.innerHTML.toLowerCase() === item.name.toLowerCase()[0]
                );
            employeeContainer.innerHTML = ""
            filteredBootyData.map(createEmployee2)
        }
    }
}


// the fetch
let userData;
const start = () => {
    const employeeContainer = document.querySelector('.container');
    fetch('https://randomuser.me/api/?results=50')
    .then(res=> res.json())
    .then(res => {
        createSearchBar()
        const searchBarList = document.querySelector('.search-bar-list')
        const bootyData = res.results.map(element=> {
            return {
        'picture': element.picture.large,
        'name': element.name.first + " " + element.name.last,
        'location': element.location.street + '<br>' + element.location.city + element.location.state + '<br>' + element.location.postcode,
        'email': element.email,
        'phone': element.cell}
        })
        searchBarList.addEventListener('click', e=> filterByName(e, bootyData));
        console.log(res)
        bootyData.forEach(createEmployee2);
    })
}
start();



/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/