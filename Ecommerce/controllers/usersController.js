const db = require("../database/models");
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');

usersController = {

    register: (req, res) => {
        res.render('users/register');
    },

    store: (req, res) => {

        let newUser = {};

        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = bcrypt.hashSync(req.body.password, 10);

        db.users.create(newUser)
            .then(function(response) {
                console.log(response);
                return res.redirect('/users/login');
            }).catch(function(error) {
                return res.send(error);
            });

    },

    loginForm: (req, res) => {
        res.render('users/login');
    },

    login: (req, res) => {
        db.users.findOne({
                where: {
                    email: req.body.email,
                }
            })
            .then(function(response) {
                console.log(response);
                if (bcrypt.compareSync(req.body.password, response.password)) {
                    req.session.user = response;
                    console.log(req.session.user);
                    return res.redirect('/');
                }
            }).catch(function(err) {
                res.send(err);
            })
    },

    logOut: (req, res) => {
        req.session.user = undefined;
        res.redirect('/');
    },

    profile: (req, res) => {
        res.render('users/profile', { req });
    },

}

module.exports = usersController;