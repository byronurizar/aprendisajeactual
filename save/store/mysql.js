const mysql=require('mysql');

const config=require('../config');

const dbconf={
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database
}

//Conexión

let connection;

function handleCon(){
    connection=mysql.createConnection(dbconf);

    connection.connect((error)=>{
        if(error){
            console.log('[db error]',error);
            setTimeout(handleCon, 2000);
        }else{
            console.log("DB Connected");
        }
        
    });

    connection.on('error',error=>{
        console.log('[db error]',error);
        if(error.code==='PROTOL_CONNECTION_LOST'){
            handleCon();
        }else{
            throw error;
        }
    });
}
handleCon();

function list(table){
    return new Promise((resolver,reject)=>{
        connection.query(`select * from ${table}`,(error,data)=>{
            if(error) return reject(error);
            resolver(data);
        });
    });
}

function get(table,id){
    return new Promise((resolver,reject)=>{
        connection.query(`select * from ${table} where id='${id}'`,(error,data)=>{
            if(error) return reject(error);
            resolver(data);
        });
    });
}

function insert(table,data){
    return new Promise((resolver,reject)=>{
        connection.query(`INSERT INTO  ${table} SET ?`, data,(error,result)=>{
            if(error) return reject(error);
            resolver(result);
        });
    });
}

function update(table,data){
    return new Promise((resolver,reject)=>{
        connection.query(`UPATE ${table} SET ? WHERE id=?`,[data,data.id],(error,result)=>{
            if(error) return reject(error);
            resolver(result);
        });
    });
}

function upsert(table,data){
    if(!data && data.id){
        console.log("Entro en update");
        return update(table,data)
    }else{
    return insert(table,data)
    }
}

function query(table,q){
    return new Promise((resolver,reject)=>{
        connection.query(`SELECT * FROM ${table} where ?`,q,(err,res)=>{
            if(err) return reject(err);
            resolver(res[0] || null)
        });
    })
}

module.exports={
    list,
    get,
    upsert,
    query
}