var models = require('./server.js').models;

/*
models.Profile.findOrCreate({name: 'Ofir2'}, (err, profile) => {
    if (err) {
        console.log("There was an error", err);
    }
    else if (profile) {
        profile.email = 'ofir@ofirgilad2.com';
        profile.save((ue, updated) => {
            console.log("Updated?", updated);
        });
    }
})
*/

/*
var toSave = [
    {name: 'Ofir', email: 'ofirgilad@mail.com'},
    {name: 'Ofir1', email: 'mail@mail.com'},
    {name: 'Ofir', email: 'mail1@mail.com'},
    {name: 'Ofir2', email: 'mail2@mail.com'},
    {name: 'Ofir', email: 'soeone@mail.com'},
    {name: 'Ofir34', email: 'asf@mail.com'},
    {name: 'Someone', email: 'email@mail.com'},
    {name: 'Someone else', email: 'ofir@ofirgilad@mail.com'},
    {name: 'Someone1', email: 'ofir@ofirgilad.com'},
    {name: 'Some1', email: 'ofirgilad1@mail.com'},
    {name: 'someone', email: 'ofirgilad2@mail.com'},
    {name: 'ofirgilad', email: 'ofirgilad3@mail.com'},
    {name: 'ofir', email: 'ofirgilad@mail4.com'},
];

toSave.map(obj => {
    models.Profile.create(obj, (err, created) => {
        console.log("Created?", created);
    })
})
*/

var filter = {
    where: {
        email: {like: 'ofir'}
    }, // Kind of like MySQL Where Clause
    order: 'id ASC', // Order by: "field direction"
    limit: 10,
    skip: 0,
    fields: {
        email: true
    }
}

// Profile.Posts.Image

models.Profile.findById("612e785cca3ddd11749d7a54", (err, found) => {
    console.log("Found?", err, found);
})
