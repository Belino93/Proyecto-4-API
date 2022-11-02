const models = require('../models')

const ShowController = {}

// Get shows
ShowController.getShows = async (req, res) => {
    try{
        let resp = await models.Show.findAll()
        res.send(resp)
    }catch(error){
        res.send(error)
    }
}

// Top 10 rated Shows
ShowController.getTopRatedShows = async(req, res) => {
    try{
        let resp = await models.Show.findAll({
            order: [['rating', 'DESC']]
        })
        res.send(resp)
    }catch(error){
        res.send(error)
    }
    
}

// Search by ID
ShowController.getShow = (req, res) => {
    try {
        let id = req.params.id;
        models.Show.findByPk(id)
            .then(resp => res.send(resp))
    } catch (error) {
        res.send(error)
    }
}

// Search by title
ShowController.getShowByTitle = async(req, res) => {
    try {
        let title = req.params.title;
        models.Show.findAll({
            where: {
                title: title
            }
        })
        .then(resp => {res.send(resp)})
    } catch (error) {
        
    }
}

ShowController.getShowsOut = async(req, res) => {
    try {
        let resp = await models.Show.findAll({
            where: {
                only_tv: true
            }
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

module.exports = ShowController