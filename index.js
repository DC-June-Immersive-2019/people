
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





const newArray = userData.results.map( (user) => {
    return {
        picture : `${user.picture.thumbnail}`,
        name : `${user.name.first} ${user.name.last}`,
        location : `${user.location.street} 
        ${user.location.city} ${user.location.state}
        ${user.location.postcode}`,
        email : `${user.email}`,
        phone : `${user.phone}`
    }
    
});
