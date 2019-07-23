document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});

const start = () => {
    const container = document.querySelector('.container');
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(res => {
        // const userData = res.results.map(newUserData).map(createAvatar);
        const userData = res.results.map(newUserData).map(i => {newAvatar = createAvatar(i);})
        // userData.forEach (el) => container.appendChild(el);} )
// addLetters();
// letterContainer.addEventListener('click', filterListByLetters)
console.log("Hello bzz bzz")})}

start()
//CONSTANTS FOR CALLING MY HTML AND STYLES
const container = document.querySelector(".container")
const body = document.querySelector("body")
const header = document.querySelector("h1")
const headerNew = document.createElement('h4');

//inputs of remapped arrays
//output HTML
function createAvatar(x){
    const newAvatar = document.createElement('section');
    newAvatar.classList.add('avatar');
    newAvatar.innerHTML=`
    <div class="avatar-image">
    <img src="${x.imageSrc}" alt="${x.name}"/>
        </div>
        <div class="avatar-content">
            <h2 class="avatar-header">${x.name}</h2>
            <div class="avatar-location">
                ${x.location}
            </div>
            <ul class="avatar-contact-list">
                <li class="avatar-contact-list-item">
                    <a href="${x.email}">✉</a>
                </li>
                <li class="avatar-contact-list-item">
                    <a href="${x.phone}>✆</a> 
                </li>
            </ul>
        </div>`
    container.appendChild(newAvatar);
}


const newUserData = i =>{
    return {
        name : `${i.name.first} ${i.name.last}`,
        lastname: `${i.name.last}`,
        imageSrc : `${i.picture.large}`,
        location : `${i.location.street}<br/> ${i.location.city}, ${i.location.state}<br/>${i.location.postcode}`,
        phone : `${i.cell}`,
        email: `mailto:${i.email}`
    }}

//for use with local, person.js userData
// const profiles = userData.results.map(newUserData).map(i => {newAvatar = createAvatar(i);})

function createAlphabet(){
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    abc.forEach(function(letters){
        const button = document.createElement('button');
            button.innerHTML= letters;
            button.setAttribute("data-number",`${letters}`)
            header.appendChild(headerNew);
            headerNew.appendChild(button);
                button.style.border = "1px solid white";
                headerNew.style.display = "flex";
                headerNew.style.justifyContent = "space-around";
        button.addEventListener("click", (event) => {
            console.log(`${button.dataset.number} clicked!`)
            const result = profiles.filter(letter => letter.lastname[0] === `${button.dataset.number.toLowerCase()}`)
        })
})}

//creates my alphabets
createAlphabet()