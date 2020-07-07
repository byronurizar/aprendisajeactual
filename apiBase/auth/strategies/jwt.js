const passport = require('passport');
const {Strategy,ExtractJwt}=require('passport-jwt');
// const boom=require('@hapi/boom');
const { Usuario } = require('../../store/db');
const config=require('../../config');

passport.use(
    new Strategy({
        secretOrKey:config.jwt.secret,
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload,cb){
        try {
            const user = await Usuario.findOne({ where: { usuarioId:tokenPayload.data.usuarioId } });
            if (!user) {
                return cb('Usuario no autorizado', false);
            }
            
            delete user.password;
            return cb(null, user);
        } catch (error) {
            cb(error);
        }
    })
);