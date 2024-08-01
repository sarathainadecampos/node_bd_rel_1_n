const { Fabricante, Produto } = require('./model/associacao')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('Tabelas Criadas e banco de dados sincronizado!')
    }catch(err){
        console.error('Erro ao conectar com o banco de dados!', err)
    }finally{
        conn.close()
        console.log('Fechando a conexão com o banco de dados!')
    }
}

syncDataBase()