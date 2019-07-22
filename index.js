
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

function sortArray(userArray) {

    const newArray = userArray.map( (user) => {
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

    container.innerHTML = " "
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

}

function searchBar(userData) { 
    const search = document.querySelector('.search')
    search.style.display ='flex'
    search.style.height = "auto"

    const searchBarList = document.createElement('ol')
    searchBarList.style.listStyle = 'none'
    searchBarList.style.display ='flex'

    searchBarList.style.padding="0px"
    searchBarList.style.justifyContent ="space-around"
    searchBarList.style.alignItems="center"
    searchBarList.style.width ="100vw"
    search.appendChild(searchBarList)

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    letters.forEach( letter => {
        const searchBarLetters = document.createElement('li')
        searchBarLetters.style.border ="2px solid white"
        searchBarLetters.style.padding ="15px"
        searchBarLetters.innerHTML = letter
        searchBarList.appendChild(searchBarLetters)
    })

    // When user clicks on letter
    search.addEventListener('click', event =>  {
        if (event.target !== event.currentTarget) {
            console.log(event.target.innerHTML)
            const letter = event.target.innerHTML
            const filtered = userData.results.filter((user) => {
                return user.name.last[0] === letter.toLowerCase()
            })
            console.log(filtered)
            sortArray(filtered)
        }

    })

}

const container = document.querySelector('.container');
fetch('https://randomuser.me/api/?results=50')
.then(res => res.json())
.then (res => {
    userData = (res)
    searchBar(userData)
    sortArray(userData.results)
})
