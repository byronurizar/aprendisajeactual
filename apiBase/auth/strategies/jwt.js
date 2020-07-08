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
            const {usuarioId}=tokenPayload.data;
            const actions=tokenPayload.data.actions;
            const user = await Usuario.findOne({ where: { usuarioId} });
            if (!user) {
                return cb(new Error('Usuario no autorizado'), false);
            }

            const userInfo=user.dataValues;
            userInfo.actions=actions;
            delete user.password;
            return cb(null, userInfo);
        } catch (error) {
            cb(error);
        }
    })
);