import jwt from 'jwt-simple';
import moment from 'moment';
export function createToken (user) {
  var payload ={
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  //just for sample app need to use better for security
  //return { ...user._doc, token: jwt.encode(payload, 'secret')}
  return {token: jwt.encode(payload, 'secret')};
}
export function checkAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({message: 'Please make sure your request has an Authorization header'});
  }
  var token = req.header('Authorization').split(' ')[1];
  var payload = jwt.decode(token, 'secret');
  console.log(payload);
  if (payload.exp <= moment().unix()) {
    return res.status(401).send({message: 'Token has expired'});
  }
  req.user = payload.sub;
  next();
}
