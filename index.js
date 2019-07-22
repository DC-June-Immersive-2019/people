
document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});

const container = document.querySelector(".container");
const letterContainer = document.querySelector('.letterContainer');

let randomPpl = 'https://randomuser.me/api/?results=50'
fetch(randomPpl)
    .then(response => response.json())
    .then(json => {
        const userArray = userInfo(json.results);
        function filterBears(e){
            const letter = e.target.innerText;
            const filterArray = userArray.filter((employee)=>{
                console.log(employee.name.split(' ')[1][0])
                console.log(letter)
                return letter === employee.name.split(' ')[1][0].toUpperCase();
            })
            addAvatar(filterArray)
        };
        
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letters = alphabet.split("");
        letters = letters.map((letter)=>{
            const el = document.createElement('button');
            el.innerText = letter;
            return el;
        })
        letters.forEach((letter)=>{
            letterContainer.appendChild(letter);
        })
        
        letterContainer.addEventListener('click',filterBears);

        addAvatar(userArray);
    })
    .catch(err => console.log(err))

function userInfo(results){
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
    return data
}

const addAvatar = (anyArray) => {
    container.innerHTML = ""
    anyArray.forEach( (employee) => {
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
        container.appendChild(newAvatar);
    })
}





//use filter