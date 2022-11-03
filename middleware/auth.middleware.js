const models = require('../models')

const validateAdmin = async (req, res, next) => {
    try {
        const { adminEmail } = req.body;
        const resp = await models.User.findOne({
            where: { email: adminEmail },
        })
        if(resp != null && resp.user_role === 1){
            next()
        }else{
            throw new Error('Only admins can do this')
        }
    } catch (error) {
        res.send(`${error}`)
    }

}

module.exports = validateAdmin