import Municipio from "../../components/core/Outros/Municipio"

const executequery  = require('../db')

const getMunicipio = async (req:any , res:any)=>{
    let muni =""
    const  dado = req.query.Idprovincia
    console.log(req.query)
    try {
        if(dado==undefined)
        {
         muni = await executequery('select * from tblmunicipio',[])
        }else{
            muni = await executequery('select * from tblmunicipio where idprovincia = ? ',[dado])  
        }
        res.send(muni)
    } catch (error) {
        res.status(500).json(error)
    }
}
const SalvarMunicipio = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
            Executar = await executequery('Insert into tblmunicipio(nomemunicipio, idprovincia) values(?,?)'
            ,[dados.municipio,dados.psel])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getMunicipio,SalvarMunicipio}