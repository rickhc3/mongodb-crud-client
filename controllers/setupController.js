var Person = require('../models/personModel')

module.exports = function (app, mongoose) {

    // seed database
    app.get('/person/setup', function (req, res) {

    
        var seedPeople = [{
                firstname: 'Andrew',
                surname: 'Young',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Maria',
                surname: 'Lucia',
                telephone: '4244234234',
                uf: 'SP'
            },
            {
                firstname: 'Jon',
                surname: 'Osmond',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Lucy',
                surname: 'Carter',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Daniel',
                surname: 'Jones',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Rachel',
                surname: 'Fuligula',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Tony',
                surname: 'Strider',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Marcus',
                surname: 'Smith',
                telephone: '0873666333',
                uf: 'SP'
            },
            {
                firstname: 'Penelope',
                surname: 'Baker',
                telephone: '0873666333',
                uf: 'SP'
            },

        ]

        Person.create(seedPeople, function (err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }

        })
    })


    // purget people collection
    app.get('/person/purge', function (req, res) {

        mongoose.connection.db.dropCollection('people', function(err, data) {

            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })

    })


}