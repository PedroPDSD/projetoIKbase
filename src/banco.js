const mysql=require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'projetoyuri'
})

async function insertUser(email, senha, nome){
    try{
        connection.connect()
        const query  = `insert into usuario(email, senha, nome) values('${email}', '${senha}', '${nome}')`
        connection.query(query)
        console.log('Comando executado')
        connection.end()
    }catch{
          console.log('Erro ao executar comando insertUser')
    } 
}

async function insertTopic(titulo, texto, tecnologia, usuario){
    try{
        connection.connect()
        const query  = `insert into topico(titulo, texto, tecnologia, dataCriacao, usuario) values('${titulo}', '${texto}', '${tecnologia}', curdate(), '${usuario}')`
        connection.query(query)
        console.log('Comando executado', [])
        connection.end()
    }catch{
          console.log('Erro ao executar comando insertUser')
    } 
}

module.exports={insertUser, insertTopic}