//formatting JS to match HTML currently in place
const container = document.querySelector(`.container`);
const searchCont = document.querySelector(`.searchContainer`)
const searchbar = document.querySelector(`.search`);
const submit = document.querySelector(`.submit`);
const reset = document.querySelector(`.reset`);
//variable to connect profiles and information
let currentUsers;
//gathering the proper info for creating profiles        
const createPerson = (users) => {
    const mappedUsers = users.map(user => {
            return{
            name:`${user.name.first} ${user.name.last}`,
            location:`${user.location.street} <br>${user.location.city} <br>${user.location.state} <br>${user.location.postcode}`,
            picture: user.picture.large|| user.picture.medium|| user.picture.thumbnail,
            email: user.email,
            phone:user.email,
            }
    })
return mappedUsers
}
//implementing the gatehred information into proper HTML formatting
const createProfile = (newUser) => {
    container.innerHTML = ``
    for (i=0; i<newUser.length; i++) {
    const profile = document.createElement(`section`);
    profile.classList.add('avatar')
    profile.innerHTML=`     
        <div class="avatar-image">
        <img src="${newUser[i].picture}" alt=""/>
        </div>
        <div class="avatar-content">
        <h2 class="avatar-header">${newUser[i].name}</h2>
        <div class="avatar-location">
            ${newUser[i].location}</div>
        <ul class="avatar-contact-list">
            <li class="avatar-contact-list-item">
                <a href="${newUser[i].email}">✉</a>
            </li>
            <li class="avatar-contact-list-item">
                <a href="${newUser[i].phone}">✆</a> 
            </li>
        </ul>
        </div>
        `;
    container.appendChild(profile);
    }

}
//page starter. Goes and gathers API content, forces it into functions
const start = () => {
    const container = document.querySelector(`.container`); 
    fetch(`https://randomuser.me/api/?results=50`)
    .then (res => res.json())
    .then(res => {
        currentUsers = createPerson(res.results)
        createProfile(currentUsers)
    })
}
//Event listener add to improve search effects
searchCont.addEventListener('click', (e) =>{
    if (e.target === submit) {
        const searchParam = document.querySelector('.search').value;
        const filteredUsers = currentUsers.filter(function (person) {
            return person.name[0] === searchParam;
        })
        createProfile(filteredUsers)
        } else {
            (e.target === reset)
            createProfile(currentUsers)
    } 
})
document.addEventListener('DOMContentLoaded', start);
