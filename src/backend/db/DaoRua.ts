import Municipio from "../../components/core/Outros/Municipio"

const executequery  = require('../db')

const getrua = async (req:any , res:any)=>{
    let muni
    const  dado = req.query.Idbairro
    try {
        if(dado===0)
        {
        muni = await executequery('select * from tblrua',[])
    }else{
        muni = await executequery('select * from tblrua where idbairro = ? ',[dado])
    }
        res.send(muni)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  rua 
    try {

        const dados = JSON.parse(req.body)
            rua = await executequery('Insert into tblrua(nomerua, idbairro) values(?,?)'
            ,[dados.Rua,dados.Msel])     

 res.send(rua)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getrua,Salvar}