
const newCard = document.createElement('div')
const container = document.querySelector('.container')
const inputContainer = document.querySelector('.inputContainer')
const search = document.querySelector('.search')
const submit = document.querySelector('.submit')
const reset = document.querySelector('.reset')

//globally declaring variable that will be assigned to fetched data
let currentRoster;

//Function to properly format data
function formatPeople(group)  {
    let parsedInfo = group.map( person => {
        return {
            name: `${person.name.first} ${person.name.last}`,
            location: `${person.location.street} <br> ${person.location.city}, ${person.location.state} <br> ${person.location.postcode} `,
            picture: person.picture.large ,
            email: person.email ,
            phone: person.phone,
        }
    })
    return parsedInfo
}

//Takes formatted info and makes avatars using it
function makeAvatars(peopleInfo) {
    container.innerHTML=''
    for (i = 0; i < peopleInfo.length; i++) {
        const newCard = document.createElement('div')
        newCard.innerHTML = `
        <section class="avatar">
        <div class="avatar-image">
        <img src='${peopleInfo[i].picture}' alt='${peopleInfo[i].name}'/>
        </div>
        <div class="avatar-content">
        <h2 class="avatar-header">${peopleInfo[i].name}</h2>
        <div class="avatar-location">
        ${peopleInfo[i].location}
        </div>
        <ul class="avatar-contact-list">
        <li class="avatar-contact-list-item">
        <a href="mailto:${peopleInfo[i].email}">✉</a>
        </li>
        <li class="avatar-contact-list-item">
        <a href="tel:${peopleInfo[i].phone}">✆</a> 
        </li>
        </ul>
        </div>
        </section>   
        `
        container.appendChild(newCard)
    }
}

// Importing new users, formatting them, and making their avatars
const start = (e)=> {
    const container = document.querySelector('.container')
    fetch('https://randomuser.me/api/?results=50')
    .then( res => res.json())
    .then(res => {
        currentRoster = formatPeople(res.results)
        makeAvatars(currentRoster) 
    })
}
//Running start once data is received from API
document.addEventListener('DOMContentLoaded', start);

//adding functionality to search feature with click handler
inputContainer.addEventListener('click', (e) =>{
    if (e.target === submit) {
        const searchParam = search.value.toLowerCase()
        console.log(searchParam);
        const filteredUsers = currentRoster.filter(function (person) {
            return person.name.includes(search.value)
        })
        makeAvatars(filteredUsers)
    }
    else if (e.target === reset){
        makeAvatars(currentRoster)
    }
})