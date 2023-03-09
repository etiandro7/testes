const executequery  = require('../db')

const getInterveniente = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblinterveniente',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        console.log(dados)
           Executar = await executequery('INSERT INTO tblinterveniente(idpessoa, idacdidente, estado, posicao, banco, idveiculo, interveniente)  values(?,?,?,?,?,?,?)'
            ,[
                dados.idpessoa, 
                dados.idacdidente, 
                dados.estado,
                 dados.posicao, 
                 dados.banco, 
                 dados.idveiculo, 
                 dados.interveniente
                 
               
            ])     

 res.send(Executar)
    } catch (error) {
        console.log("erro do tipo ",error)
       res.status(500).json(error)
    }
}

export{getInterveniente, Salvar}