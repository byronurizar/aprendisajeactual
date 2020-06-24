
const TABLA='user';
const {nanoid}=require('nanoid');

module.exports=(injectedStore)=>{
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }
    const list=()=>{
        return store.list(TABLA);
    }
    const get=(id)=>{
        return store.get(TABLA,id);
    }
    const upsert=(body)=>{
        console.log({body});
        const user={
            name:body.name
        }

        if(body.id){
            user.id=body.id;
        }else{
            user.id=nanoid();
        }

        return store.upsert(TABLA,user);
    }
    const remove=(id)=>{
        return store.remove(TABLA,id)
    }
    return {
        list,
        get,
        upsert,
        remove
    }
}
