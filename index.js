// Grab container where employees will be added

const avatarContainer = document.querySelector(".container");

// Create a search container for an eventual search bar
// and place that container above the container that
// houses the employees

const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");
document.body.insertBefore(searchContainer, avatarContainer);

// Get data from API

fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
    .then(json => {
        const avatarInfo = getAvatarData(json.results);

        function getLastInitial(event) {
            const letter = event.target.innerText;
            const avatarInfoFiltered = avatarInfo.filter( (employee) => {
                return letter === employee.name.split(" ")[1][0].toUpperCase();
            })
            addAvatar(avatarInfoFiltered);
        };
        
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letters = alphabet.split("");
        letters = letters.map( (letter) => {
            const aButton = document.createElement("button");
            aButton.innerText = letter;
            return aButton;
        })

        letters.forEach( (letter) => {
            searchContainer.appendChild(letter);
        })
        
        searchContainer.addEventListener("click",getLastInitial);

        addAvatar(avatarInfo);
    })

function getAvatarData(results) {
    let userData = results
    const data = userData.map( (employee) => {
        return {
            "name" : `${employee.name.first} ${employee.name.last}`,
            "location" : `${employee.location.street}<br/> ${employee.location.city}, ${employee.location.state}<br/>${employee.location.postcode}`,
            "email" : `${employee.email}`,
            "phone" : `${employee.phone}`,
            "picture" : `${employee.picture.large}`
        }
    });
    return data;
}

const addAvatar = (avatarArray) => {
    while (avatarContainer.firstChild) (avatarContainer.removeChild(avatarContainer.firstChild));
    
    avatarArray.forEach( (employee) => {
        const newAvatar = document.createElement("section");
        newAvatar.classList.add("avatar");
        newAvatar.innerHTML = `
        <div class="avatar-image">
            <img src=${employee.picture} alt="${employee.name}"/>
        </div>
        <div class="avatar-content">
            <h2 class="avatar-header">${employee.name}</h2>
            <div class="avatar-location">
                ${employee.location}
            </div>
            <ul class="avatar-contact-list">
                <li class="avatar-contact-list-item">
                    <a href="mailto:${employee.email}">✉</a>
                </li>
                <li class="avatar-contact-list-item">
                    <a href="tel:${employee.phone}">✆</a> 
                </li>
            </ul>
        </div>`
        avatarContainer.appendChild(newAvatar);
    })
}