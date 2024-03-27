const { Client } = require("pg");
  const client = new Client({
    user: 'admin',
    host: 'localhost',
    database: 'requetemorpho',
    password: 'admin',
    port: 5432,
  });
  
const getClient = () => client;

module.exports = ({ getClient })