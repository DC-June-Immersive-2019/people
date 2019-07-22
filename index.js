//Cards from API

function myFunct (x){//my function
    x.forEach(person => {//userData  loop function
        const container = document.body.querySelector(".container");
        const sect = document.createElement('div');
        sect.innerHTML = ` <section class="avatar">
        <div class="avatar-image">
        <img src=${person.picture.large} alt="albert fleming"/>
    </div>
    <div class="avatar-content">
        <h2 class="avatar-header">${person.name.first} ${person.name.last}</h2>
        <div class="avatar-location">
            ${person.location.street}<br/> ${person.location.city}, ${person.location.state}<br/>${person.location.postcode}
        </div>
        <ul class="avatar-contact-list">
            <li class="avatar-contact-list-item">
                <a href="mailto:${person.location.email}">✉</a>
            </li>
            <li class="avatar-contact-list-item">
                <a href="tel:${person.location.phone}">✆</a> 
            </li>
        </ul>
    </div>
    </section>
    `//<=backtic is here
    container.appendChild(sect)  

})//card loop



}

fetch(`https://randomuser.me/api/?results=50`)//fetch
    .then(res=>res.json())
    .then(res=>{ myFunct(res.results)
})//fetch
console.log(userData)
//letter mapping 
const letterArr = userData.results.map(person =>{//map for array
    let newP = person.name.last[0]
    return `<div>${newP}</div>`
      
})//letter mapping

//container 2nd Declaration
const container = document.body.querySelector(".container");
//divs for my chracters
const numDiv = document.createElement('div');
//event Lister Function
numDiv.addEventListener('click',(e)=>{
    if (e.target !== e.currentTarget){
    console.log(e.target.innerText)
    const targetLetter = e.target.innerText;
    const userArray = userData.results.filter((person)=>{
        return person.name.last[0] === targetLetter
    })
    container.innerHTML = ""
    console.log(userArray)
    myFunct(userArray)
}
})//event Listener
//creates my button bar
numDiv.classList.add('letterConatiner')
numDiv.innerHTML = letterArr.join("")
document.body.insertBefore(numDiv, container)





























// numDiv.addEventListener('click', e) => {
//     if (e.target.innerHTML = userData.results.name.last[0])
//         sect.inn
    


// }



/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/
 

// document.addEventListener('DOMContentLoaded', () => {
//     console.log(`Working, Working, Working,  Working.`);
    
    
//     userData.results.forEach( person =>{
//         var container = document.body.querySelector(".container");
//         var avatar = document.body.querySelector(".avatar");
//         var clone = avatar.cloneNode(true);
//         var img = clone.querySelector('.avatar-img')
//         console.log(img)

        
//         container.appendChild(clone);
//     });
    
// });




// document.addEventListener('DOMContentLoaded', () => {


//     var avatar = document.body.querySelector(".avatar");
//     var avatar = document.body.querySelector(".avatar");
//     const el =document.createElement('section');
//     el.classList.add('box');
    
//     container.appendChild(el);
//  });

 //     userData.results.forEach( person =>{
//         var container = document.body.querySelector(".container");
//         var avatar = document.body.querySelector(".avatar");
//         var clone = avatar.cloneNode(true);
//         var img = clone.querySelector('.avatar-img')
//         console.log(img)

        
//         container.appendChild(clone);
//     });
    
// });