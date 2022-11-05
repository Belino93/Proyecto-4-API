const { isValidUserAndPassword } = require("../services/auth.service.js");
const jsonwebtoken = require("jsonwebtoken");


const authBearerMiddleware = async(req, res, next) => {
    const { authorization } = req.header;

    const [strategy, jwt] = authorization.split(" ");
    try {
        if(strategy.toLowerCase() !== "bearer"){
            throw new Error('Invalid strategy')
        }
        jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    } catch (error) {
        res.status(401).json({ message: "Uou are not authenticated"})
    }
    next();
};

module.exports = { authBearerMiddleware };