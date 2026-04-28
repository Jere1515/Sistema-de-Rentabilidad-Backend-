const pool = require('../src/config/db');

const getEmpresas = async () => {
  const result = await pool.query('SELECT * FROM empresa');
  console.log(result.rows);
};

getEmpresas()