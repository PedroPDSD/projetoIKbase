
const pg = require('pg')

const config = {
    user: 'postgres', // env var: PGUSER
    database: 'talentos8', // env var: PGDATABASE
    password: 'Kbase1novar', // env var: PGPASSWORD
    host: '69.171.4.30', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    max: 100, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

const client = new pg.Client(config)

async function insertUser(email, senha, nome, nascimento) {
    try {
        client.connect()
        const query = `insert into usuario(email, senha, nome, nascimento) values('${email}', '${senha}', '${nome}', '${nascimento}')`
        client.query(query)
        console.log('usuario inserido: ' + nome + '.')
    } catch{
        client.end()
        console.log('Erro ao inserir o usuario')

    }
}


insertUser('peter@peter3.com', '123456', 'Parker', '1998-11-25', 'seila')


module.exports = { insertUser }




