module.exports ={
    api:{
        port:process.env.API_PORT || 3000
    },
    jwt:{
        secret:process.env.JWT_SECRET || 'llave'
    },
    mysql:{
        host:process.env.MYSQL_HOST || '127.0.0.1',
        user:process.env.MYSQL_USER || 'root',
        password:process.env.MYSQL_PASS || 'Blopez$1991',
        database:process.env.MYSQL_DB || 'demoapi'
    },
    mysql_service:{
        port:process.env.MYSQL_SRV_PORT || 3001
    }
}