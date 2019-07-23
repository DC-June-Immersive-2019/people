document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});


 const Container = document.querySelector('.container');
 const body = document.querySelector(`body`);

 fetch(`https://randomuser.me/api/?results=50`)
    .then(response=>response.json())
    .then(response=>{

 const Letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


//  ******************
    // Making a Container for Buttons, Append Buttons, Style Buttons
//  ******************



 const buttonContainer = document.createElement('div');
 buttonContainer.style.position =  ('Absolute')
 buttonContainer.style.marginTop= ('40px')
 buttonContainer.style.marginLeft= ('140px')
 body.prepend(buttonContainer);
 Letters.forEach(function(letter){
     let createButton = document.createElement('button');
     createButton.style.fontSize= ('20px')
     createButton.style.margin= ('4px')
     createButton.style.textAlign= ('Center')
     createButton.style.backgroundColor = ('White')
     createButton.style.borderRadius = ('8px')
     createButton.style.borderColor = (' Purple')


     buttonContainer.appendChild(createButton);
     createButton.innerHTML= letter;

     createButton.addEventListener('click', handleClick)
 })



//  ******************
// Result from the random USER Generator
//  ******************

 const randomUserGeneratorResults = response.results






 //  ******************
    // Function to filter out the Data
//  ******************

 function handleClick(event){

 let filteringData = response.results.filter(function(data){
     if (event.target.innerHTML.toLowerCase() === data.name.last[0]){
      
         return data.name.last[0]  ;

     }else{
         console.log('no match', data.name.first)
     }
 })




//  ******************
// Remove the boxes once filter by Function above
//  ******************
 let peopleList = document.body.querySelectorAll('section');
 console.log('peopleList') 
 peopleList.forEach(function(item){
         item.remove()
    })

    filtering(filteringData)
}
   filtering(randomUserGeneratorResults);
});



  

 function filtering(data) {
    
    data.forEach(person => {
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
    `
    Container.appendChild(sect)  

})
 }



/*

We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen

1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter

*/