const executequery  = require('../db')

const getBairro = async (req:any , res:any)=>{
    let bairro =""
    const  dado = req.query.Idmunicipio
    try {
        if(dado==undefined)
        {
            bairro = await executequery('select * from tblbairro',[])
        }
        else{
            bairro = await executequery('select * from tblbairro where idmunicipio = ? ',[dado])  
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
        console.log(req.body)
            Executar = await executequery('Insert into tblbairro(nomebairro, idmunicipio) values(?,?)'
            ,[dados.bairro,dados.Msel])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getBairro,Salvar}