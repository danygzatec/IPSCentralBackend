module.exports = {
  HOST: ".",
  USER: "sa",
  PASSWORD: "123456",
  DB: "IPSCentral.2",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
};
