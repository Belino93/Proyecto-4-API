const { sequelize } = require('../models')
const models = require('../models')

const UserController = {}

// New User
UserController.createUser = async (req, res) => {
    try {
        let data = req.body
        const emailDb = await models.User.findOne({ where: { email: email } })
        if (emailDb != null) {
            throw new Error('Email has already in DB')
        } else {
            let user = {
                name: data.name,
                email: data.email,
            }
            await models.User.create(user)
            res.send('User create succesfully!')
        }

    } catch (error) {
        res.send(`${error}`)
    }
}

// Get user
UserController.getUser = async (req, res) => {
    const email = req.params.email
    try {
        const resp = await models.User.findOne({
            where: { email: email },
            attributes: ['name', 'user_role', 'email']
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
    }


}

//Update User
UserController.patchUser = async (req, res) => {
    const { name, surname, country, email } = req.body
    try {
        await models.User.update({
            name: name,
            surname: surname,
            country: country,
        },
            {
                where: { email: email }
            })
        res.send('Register updated succesfully')
    } catch (error) {
        res.send(error)
    }
}

// Delete User
UserController.deleteUser = async (req, res) => {
    try {
        let { email } = req.body
        let resp = await models.User.destroy({
            where: {
                email: email
            }
        })
        if (resp === 1) {
            res.send('User deleted succesfully')
        }else{
            throw new Error('Email error')
        }
    } catch (error) {
        res.send(`${error}`)
    }
}






module.exports = UserController