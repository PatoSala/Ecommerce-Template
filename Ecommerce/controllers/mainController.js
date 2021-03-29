const db = require('../database/models');

mainController = {

    index: (req, res) => {
        res.render('index', { req });
    },

    test: (req, res) => {
        db.users.create({
                name: 'test',
                email: 'test@test.com',
                password: 'test123',
            })
            .then(function(response) {
                res.json(response);
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    check: (req, res) => {
        if (req.session.user != undefined) {
            res.json(req.session.user);
        } else {
            res.send('no one has logged in')
        }
    }

}

module.exports = mainController;