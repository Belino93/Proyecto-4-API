const { sequelize } = require('../models')
const models = require('../models')

const UserController = {}

// New User
UserController.createUser = async (req, res) => {
    try {
        let user = req.body
    } catch (error) {
        res.send(error)
    }
}