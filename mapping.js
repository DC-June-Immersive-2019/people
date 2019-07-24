

console.log(userData.results);

const d = userData.results.map( user => {
    return {
        name: `${user.name.first} ${user.name.last}`,
        location: `${user.location.street} ${user.location.city} ${user.location.state} ${user.location.postcode}`,
        picture: user.picture.large || user.picture.medium || user.picture.thumbnail,
        email: user.email,
        phone: user.phone
    }
});

const els = d.map( user => `<div><a href="mailto:${user.email}">${user.name}</a></div>`);
document.body.innerHTML = els.join('');
console.log(els);