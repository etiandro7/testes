const executequery  = require('../db')

const getModelo = async (req:any , res:any)=>{
    let orgao =""
    const  dado = req.query.idmarca
    try {
        if(dado!=0)
        {
         
            orgao = await executequery('select * from tblmodelo where idmarca = ? ',[dado])
         } else{
          
            orgao = await executequery('select * from tblmodelo',[])
        }
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        
            Executar = await executequery('Insert into tblmodelo(modelo, idmarca) values(?,?)'
            ,[dados.modelo,dados.marca])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getModelo, Salvar}