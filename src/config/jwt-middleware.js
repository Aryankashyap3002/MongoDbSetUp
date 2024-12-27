import JWT, { ExtractJwt } from 'passport-jwt'
import User from '../models/user.js';

const jwtStrategy = JWT.Strategy;
const extractJwt = JWT.ExtractJwt;

const opts =  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret',

}

export const passportAuth = (passport) => {
    passport.use(new jwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user) {
            done(null, false);
        } else {
            done(null, user)
        }
    }))
}