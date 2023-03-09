//import Provincia from "../../components/core/Outros/Provincia";
const executequery  =  require('../db')
import Provincia from '../../components/core/Outros/Familia'

const getFamilia = async (req:any , res:any)=>{
    try {
        let prov = await executequery('select * from tblfamilia',[])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getFamiliaid = async (req:any , res:any)=>{
    try {
        const dados = JSON.parse(req.body)
        let prov = await executequery('select * from tblfamilia where idprovincia = ?',[dados.id])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const Salvar = async  (req,res)=>{
    let  Executar 
    try {
        const dados = JSON.parse(req.body)
  
     
            Executar = await executequery('Insert into tblfamilia(Nomefamilia) values(?)',[dados.Familia])     
     
 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}
const Excluir = async  (req:any , res:any)=>{  
    const dados = JSON.parse(req.body)
   try
    {
     
       let Executar = await executequery('delete from tblprovincia where idprovincia = ?',[dados.id])
       res.send(Executar)
    } 
    catch (error)
    {
       res.status(500).json(error)
    }
}

export{getFamilia, Salvar,Excluir, getFamiliaid}