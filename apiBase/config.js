module.exports = {
    api: {
      port: process.env.API_PORT || 3000,
    },
    jwt: {
      secret: process.env.JWT_SECRET || "llave",
    },
    bd: {
      database: "demoBase",
      username: "root",
      password: "Blopez$1991",
      host: "localhost",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  };
  