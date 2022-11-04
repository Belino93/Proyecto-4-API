const { sequelize } = require('../models');
const models = require('../models')

const LeaseController = {}

LeaseController.newLease = async (req, res) => {
    try {
        const { date_start, date_end, user_id, articles_id } = req.body;
        const resp = await models.Lease.create({
            date_start: date_start,
            date_end: date_end,
            user_id: user_id,
        })
        if (articles_id) {
            articles_id.forEach(async (article_id) => {
                await sequelize.query(`INSERT INTO Articles_Lease(article_id, lease_id) VALUES (${article_id},${resp.lease_id})`)
            });
            res.send('Lease created')
        } else {
            throw new Error('Article error')
        }

    } catch (error) {
        res.send(error)
    }
}

LeaseController.updateLease = async (req, res) => {
    try {
        const { lease_id, article_id, newArticleId } = req.body
        await sequelize.query(`UPDATE Articles_Lease SET article_id=${newArticleId} WHERE lease_id=${lease_id} AND article_id=${article_id}`)
        res.send('Registro actualizado')
    } catch (error) {
        res.send(error)
    }

}

LeaseController.showLease = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const resp = await models.Lease.findAll({
            where:{
                user_id:user_id
            }
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
    }

}

LeaseController.showAll = async(req, res) => {
    try {
        let adminEmail = req.params.adminEmail
        let isAdmin = await models.User.findOne({where:{email:adminEmail}})
        if(isAdmin.user_role === 1){
            let resp = await models.Lease.findAll()
            res.send(resp)
        }else{
            throw new Error('Only Admin can do this')
        }
        
    } catch (error) {
        res.send(`${error}`)
    }
}
module.exports = LeaseController

//sequelize.query(`SELECT article_id FROM Articles_Lease WHERE lease_id=${lease_id}`)