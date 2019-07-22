
document.addEventListener('DOMContentLoaded', () => {
    
    console.log(`It's better to burn out than to fade away.`);
});
const Container = document.querySelector('.container');
const Avatar = document.querySelector('.avatar');


const body = document.querySelector(`body`);

const searchList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','reset'];

const buttonContainer = document.createElement('div');
Container.prepend(buttonContainer)
searchList.forEach(function(letter){
    let newButton = document.createElement('button');
    buttonContainer.appendChild(newButton);
    newButton.innerHTML= letter;
    newButton.addEventListener('click', buttonClick)

})

var filtered = userData.results;

function buttonClick(event){
    filtered = userData.results.filter(function(data){
        if (event.target.innerHTML === 'reset'){
            return userData.results
        }else{
            return data.name.last[0] === event.target.innerHTML;
        }
    })
    console.log(event.target.innerHTML)
    let currentAvas = document.body.querySelectorAll('section'); 
    currentAvas.forEach(function(item){
        if(item.classList.contains('hidden')) {}
        else{
            item.remove();
        }
    })
    toFilter()
}
  
console.log(userData);

function toFilter() {
    filtered.forEach(function(element, index) {
        let avatarClone = Avatar.cloneNode(true) ;

        avatarClone.classList.remove('.hidden')

        let fullName = `${element.name.first} ${element.name.last}`
        console.log(fullName)
        
        let newContainer = Container.appendChild(avatarClone);
        let image = newContainer.querySelector(`img`);

        image.src = element.picture.large;

        let avaHeader = newContainer.querySelector(`.avatar-header`);

        avaHeader.innerHTML =  fullName;

        let address =  newContainer.querySelector(`.avatar-location`)

        let addressString = `${element.location.street} </br> ${element.location.city}, ${element.location.state} </br> ${element.location.postcode}`;
        
        address.innerHTML =  addressString;



        let contactItems = document.body.querySelectorAll(`.contact-list-item`);
        let email;
        let phoneNumber;
        contactItems.forEach(function(e){
            if (e.includes(`@`)) {
                email = e;
            }else{
                phone = e;
            }
        })

    });
}
toFilter()
/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/