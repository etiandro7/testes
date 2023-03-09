const executequery  = require('../db')

const getOrgao = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblorgao',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        
            Executar = await executequery('Insert into tblorgao(Nomeorgao, sigla) values(?,?)'
            ,[dados.nomeorgao,dados.sigla])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getOrgao, Salvar}