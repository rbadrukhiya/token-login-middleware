var jwt = require('jsonwebtoken');
function verify(req , res , next){
    const token = req.body.token || req.headers.token || req.query.token

    console.log(token);
    if(!token)
    {
       return res.status(401).send('token is required for authentication')
    }
    try{
        const decoded = jwt.verify(token , 'ravi')
        req.user = decoded
        console.log(decoded);
    }
    catch(err)
    {
       return res.status(401).send('invalid token')
    }
  return  next()
}
module.exports = verify