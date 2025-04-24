const jwt = require('jsonwebtoken');

const validateToken =async (req, res, next)=>{
    let token = req.headers['authorization'].split(" ")[1];
    try {
        let privateKey = "Andgate";
        let decoded =await jwt.verify(token, privateKey);
        if(decoded){
            next();
        }
    } catch (error) {
    return res.status(500).send({ status: false, message: "Somthing went wrong." });
    }
}


module.exports = validateToken;