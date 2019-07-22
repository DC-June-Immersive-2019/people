
const newCard = document.createElement('div')
const container = document.querySelector('.container')
const inputContainer = document.querySelector('.inputContainer')
const search = document.querySelector('.search')
const submit = document.querySelector('.submit')
const reset = document.querySelector('.reset')

// inputContainer.addEventListener('click', (e) =>{
//     if (e.target === submit) {
//         const searchParam = search.value
//         const filteredUsers = userData.results.filter(function (person) {
//             return person.name.last[0] === `${search.value}`
//         })
//         createPage(filteredUsers)
//     }
//     else if (e.target === reset){
//         createPage(userData.results)
//     }
// })
// createPage(userData.results)
// const createPerson = person => {
//     return {
//         name: `${person.name.first} ${person.name.last}`,
//         location: `${person.location.street} <br> ${person.location.city}, ${person.location.state} <br> ${person.location.postcode} `,
//         picture: person.picture.large ,
//         email: person.email ,
//         phone: person.phone,
//     }
// }
// const createAvatar = 
function createPage(group) {
    let reqInfo;
    if (group[0].name.first) {
        reqInfo = group.map( person => {
            return {
                name: `${person.name.first} ${person.name.last}`,
                location: `${person.location.street} <br> ${person.location.city}, ${person.location.state} <br> ${person.location.postcode} `,
                picture: person.picture.large ,
                email: person.email ,
                phone: person.phone,
            }
        })
    }
    else { reqInfo=group
    }
    console.log(reqInfo);
    console.log(reqInfo.length)
    container.innerHTML=''
    for (i = 0; i < reqInfo.length; i++) {
        const newCard = document.createElement('div')
        newCard.innerHTML = `
        <section class="avatar">
        <div class="avatar-image">
        <img src='${reqInfo[i].picture}' alt='${reqInfo[i].name}'/>
        </div>
        <div class="avatar-content">
        <h2 class="avatar-header">${reqInfo[i].name}</h2>
        <div class="avatar-location">
        ${reqInfo[i].location}
        </div>
        <ul class="avatar-contact-list">
        <li class="avatar-contact-list-item">
        <a href="mailto:${reqInfo[i].email}">✉</a>
        </li>
        <li class="avatar-contact-list-item">
        <a href="tel:${reqInfo[i].phone}">✆</a> 
        </li>
        </ul>
        </div>
        </section>   
        `
        container.appendChild(newCard)
    }
}
const start = (e)=> {
    const container = document.querySelector('.container')
    fetch('https://randomuser.me/api/?results=50')
    .then( res => res.json())
    .then(res => {
        createPage(res.results)  
        const reqInfo = res.results.map( person => {
            return {
                name: `${person.name.first} ${person.name.last}`,
                location: `${person.location.street} <br> ${person.location.city}, ${person.location.state} <br> ${person.location.postcode} `,
                picture: person.picture.large ,
                email: person.email ,
                phone: person.phone,
            }
        })
        console.log('hi');
        console.log(reqInfo);
        inputContainer.addEventListener('click', (e) =>{
            if (e.target === submit) {
                const searchParam = search.value.toLowerCase()
                console.log(searchParam);
                const filteredUsers = reqInfo.filter(function (person) {
                    return person.name.includes(search.value)
                })
                console.log(filteredUsers);
                createPage(filteredUsers)
            }
            else if (e.target === reset){
                createPage(res.results)
            }
        })
    })
}
document.addEventListener('DOMContentLoaded', start);
// function makePage(people) {
    //     container.innerHTML = ""
    //     people.forEach(function (person) {
        //         let firstName = person.name.first
        //         let lastName = person.name.last
        //         let email = person.email
        //         let phone = person.phone
        //         let avatarImage = person.picture.large
        //         let address = person.location.street
//         let city = person.location.city
//         let state = person.location.state
//         let zipCode = person.location.postcode
//         const newCard = document.createElement('div')
//         container.appendChild(newCard)
//         newCard.innerHTML = `
//         <section class="avatar">
//         <div class="avatar-image">
//         <img src='${avatarImage}' alt=${firstName} ${lastName}/>
//         </div>
//         <div class="avatar-content">
//         <h2 class="avatar-header">${firstName} ${lastName}</h2>
//         <div class="avatar-location">
//         ${address}<br/> ${city}, ${state}<br/>${zipCode}
//         </div>
//         <ul class="avatar-contact-list">
//         <li class="avatar-contact-list-item">
//         <a href="mailto:${email}">✉</a>
//         </li>
//         <li class="avatar-contact-list-item">
//         <a href="tel:${phone}">✆</a> 
//         </li>
//         </ul>
//         </div>
//         </section>   
//         `
//     })
// }
//     container.innerHTML = ""
//     people.forEach(function (person) {
//         const reqInfo = userData.results.map((person2) => {
//             let firstName = person2.name.first
//             let lastName = person2.name.last
//             let email = person2.email
//             let phone = person2.phone
//             let avatarImage = person2.picture.large
//             let address = person2.location.street
//             let city = person2.location.city
//             let state = person2.location.state
//             let zipCode = person2.location.postcode
//             const newCard = document.createElement('div')
//             container.appendChild(newCard)
//             newCard.innerHTML = `
//             <section class="avatar">
//             <div class="avatar-image">
//             <img src='${avatarImage}' alt=${firstName} ${lastName}/>
//             </div>
//             <div class="avatar-content">
//             <h2 class="avatar-header">${firstName} ${lastName}</h2>
//             <div class="avatar-location">
//             ${address}<br/> ${city} ${state}<br/>${zipCode}
//             </div>
//             <ul class="avatar-contact-list">
//             <li class="avatar-contact-list-item">
//             <a href="mailto:${email}">✉</a>
//             </li>
//             <li class="avatar-contact-list-item">
//             <a href="tel:${phone}">✆</a> 
//             </li>
//             </ul>
//             </div>
//             </section>   
//             `
//         })
//     })
// }
/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
name start with a given letter

*/

