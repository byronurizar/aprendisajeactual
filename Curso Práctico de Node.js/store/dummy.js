const db={
    'user':[
        {id:'1',name:'Prueba'}
    ],
};

const list=async (tabla)=>{
    return db[tabla];
}

const get=async (tabla,id)=>{
    let col=await list(tabla);
    return col.filter(item=>item.id===id)[0] || null;
}

const upsert=async (tabla,data)=>{
    if(!db[tabla]){
        db[tabla]=[];
    }

    console.log(db);
   return db[tabla].push(data);
}

const remove=async (tabla,id)=>{
 return true;
}

module.exports={
    list,
    get,
    upsert,
    remove
}