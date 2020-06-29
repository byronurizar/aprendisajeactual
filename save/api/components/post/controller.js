
const TABLA='post';
const {nanoid}=require('nanoid');
const auth = require('../auth');

module.exports=(injectedStore)=>{
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }
    const list=()=>{
        return store.list(TABLA);
    }
    return{
        list
    }
}