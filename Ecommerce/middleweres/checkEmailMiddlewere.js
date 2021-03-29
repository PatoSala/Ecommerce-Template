const db = require('../database/models');

function checkEmailMiddlewere(req, res, next) {

    let emailError = 'Email is already in use';
    let formInfo = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    db.users.findOne({
            where: {
                email: formInfo.email,
            }
        })
        .then(function(response) {
            if (response) {
                res.render('users/register', { emailError, formInfo });
            } else {
                next();
            }
        })
        .catch(function(error) {
            res.send(error);
        })

}

module.exports = checkEmailMiddlewere;