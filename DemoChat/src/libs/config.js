// module.exports = {
//     database: "chatBotDemo",
//     username: "root",
//     password: 'Blopez$1991',
//     params: {
//         host:"localhost",
//         dialect: 'mysql',
//         define:{
//             underscore:true
//         },
//         operatorAliases:false
//     }
// };

module.exports = {
    params: {
        dialect: 'sqlite',
        storage: 'db.sqlite'
    }
};