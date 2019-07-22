
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

// const picture = 'https://randomuser.me/api/portraits/men/3.jpg';
// const name = "albert fleming";
// const locationText = "7693 westmoreland street<br/> arklow, offaly<br/>54657";
// const mail = 'mailto:albert.fleming@example.com';
// const pNum = 'tel:071-584-8322'

// function createEmployee(picture, name, locationText, mail, pNum) {
//     const newSection = document.createElement('section');
//     newSection.classList.add('avatar');
    
//     const avatarImageDiv = document.createElement('div');
//     avatarImageDiv.classList.add('avatar-image');
//     newSection.appendChild(avatarImageDiv);
    
//     const newImg = document.createElement('img');
//     newImg.setAttribute('src', picture);
//     newImg.setAttribute('alt', name);
//     avatarImageDiv.appendChild(newImg);
    
//     const avatarContentDiv = document.createElement('div');
//     avatarContentDiv.classList.add('avatar-content');
//     newSection.appendChild(avatarContentDiv);
    
//     const nameHeader = document.createElement('h2');
//     nameHeader.classList.add('avatar-header');
//     nameHeader.innerHTML = name;
//     avatarContentDiv.appendChild(nameHeader);
    
//     const locationDiv = document.createElement('div');
//     locationDiv.classList.add('avatar-location');
//     locationDiv.innerHTML = locationText;
//     avatarContentDiv.appendChild(locationDiv);
    
//     const contactList = document.createElement('ul');
//     contactList.classList.add('avatar-contact-list');
//     avatarContentDiv.appendChild(contactList);
    
//     const listItem1 = document.createElement('li');
//     listItem1.classList.add('avatar-contact-list-item');
//     contactList.appendChild(listItem1);
    
//     const contactEmail = document.createElement('a');
//     contactEmail.setAttribute('href', mail);
//     contactEmail.innerHTML = '✉';
//     listItem1.appendChild(contactEmail);
    
//     const listItem2 = document.createElement('li');
//     listItem2.classList.add('avatar-contact-list-item');
//     contactList.appendChild(listItem2);
    
//     const contactNumber = document.createElement('a');
//     contactNumber.setAttribute('href', pNum);
//     contactNumber.innerHTML = '✆';
//     listItem2.appendChild(contactNumber);

//     employeeContainer.appendChild(newSection);
    
//     // console.log(newSection);
// }
    
// userData.results.forEach(makeEmployee);
// function makeEmployee(element) {
    // createEmployee(element.picture.large, element.name.first + " " + element.name.last, element.location.street +'<br>' + element.location.city + element.location.state + "<br>" + element.location.postcode, element.email, element.cell);
// }

function createEmployee2(el) {
    const newSection2 = document.createElement('div');
    newSection2.innerHTML =`
        <section class="avatar">
            <div class="avatar-image">
                <img src="${el.picture}" alt="${el.name}"/>
            </div>
            <div class="avatar-content">
                <h2 class="avatar-header">${el.name}</h2>
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



const updatedData = userData.results.map(element => { 
    return {
    'picture':element.picture.large, 
    'name': element.name.first + " " + element.name.last, 
    'address': element.location.street +'<br>' + element.location.city + element.location.state + "<br>" +          element.location.postcode, 
    'email': element.email, 
    'phone': element.cell}})

updatedData.map(createEmployee2);
