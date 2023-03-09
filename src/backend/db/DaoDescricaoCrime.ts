const executequery  = require('../db')

const getdescricao = async (req:any , res:any)=>{
    let bairro=""
    const dado = req.query.IdTipologia
    try {
        if (dado ===0 ) {
            bairro = await executequery('select * from tbldescricao',[])
            
        } else {
            bairro = await executequery('select * from tbldescricao where Idcrimes = ?',[dado])
        }
        res.send(bairro)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    console.log(req.body)
    try {

        const dados = JSON.parse(req.body)
  
            Executar = await executequery('Insert into tbldescricao(Descricao, idCrimes) values(?,?)'
            ,[dados.descricao,dados.Csel])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getdescricao,Salvar}