const executequery  = require('../db')

const getTipologia = async (req:any , res:any)=>{
    let bairro =""
    const  dado = req.query.idfamilia
    try {
        if(dado===0)
        {
       bairro = await executequery('select * from tblcrimes',[])
        }else{
            bairro = await executequery('select * from tblcrimes where Idfamilia = ?',[dado])
        }
        res.send(bairro)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
            Executar = await executequery('Insert into tblcrimes(Nomecrime, idfamilia) values(?,?)'
            ,[dados.Crimes,dados.Msel])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getTipologia,Salvar}