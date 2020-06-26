const store=require('../../../store/mysql');
const Ctrl=require('./controller');

module.exports=Ctrl(store);
