//import Provincia from "../../components/core/Outros/Provincia";
const executequery  =  require('../db')


const getNacionalidade = async (req:any , res:any)=>{
    try {
        let prov = await executequery('select * from tblnacionalidade',[])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getNacionalidadeid = async (req:any , res:any)=>{
    try {
        const dados = JSON.parse(req.body)
        let prov = await executequery('select * from tblnacionalidade where idnacionalidade = ?',[dados.id])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const SalvarNacionalidade = async  (req,res)=>{
    let  Executar 
    try {
        const dados = JSON.parse(req.body)

            Executar = await executequery('Insert into tblnacionalidade(nacionalidade) values(?)',[dados.nacionalidade])     
    
            res.status(200).json(Executar)

    } catch (error) {
       res.status(500).json(error)
    }
}
const Excluir = async  (req:any , res:any)=>{  
    const dados = JSON.parse(req.body)
   try
    {
       let Executar = await executequery('delete from tblnacionalidade where idnacionalidade = ?',[dados.id])
       res.send(Executar)
    } 
    catch (error)
    {
       res.status(500).json(error)
    }
}

export{getNacionalidade, SalvarNacionalidade,Excluir, getNacionalidadeid}