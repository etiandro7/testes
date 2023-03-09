const executequery  = require('../db')

const getOperacao = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tbloperacao',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        console.log(req.body)
            Executar = await executequery('INSERT INTO tbloperacao(nomeoperacao, datainicio, datatermino, orientadoPor, realizador,objs)values(?,?,?,?,?,?)'
            ,[dados.nomeoperacao,dados.datainicio,dados.datatermino,dados.orientadoPor,dados.realizador,dados.objs])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getOperacao, Salvar}