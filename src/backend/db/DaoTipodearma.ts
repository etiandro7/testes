//import Provincia from "../../components/core/Outros/Provincia";
const executequery  =  require('../db')


const getTipoarma = async (req:any , res:any)=>{
    try {
        let prov = await executequery('select * from tbltipodearma',[])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getFamiliaid = async (req:any , res:any)=>{
    try {
        const dados = JSON.parse(req.body)
        let prov = await executequery('select * from tbltipodearma where idprovincia = ?',[dados.id])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const Salvar = async  (req,res)=>{
    let  Executar 
    try {
        const dados = JSON.parse(req.body)
  
     
            Executar = await executequery('Insert into tbltipodearma(Nomearma) values(?)',[dados.nomearma])     
     
 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}
const Excluir = async  (req:any , res:any)=>{  
    const dados = JSON.parse(req.body)
   try
    {
     
       let Executar = await executequery('delete from tbltipodearma where idtipodearma = ?',[dados.id])
       res.send(Executar)
    } 
    catch (error)
    {
       res.status(500).json(error)
    }
}

export{getTipoarma, Salvar,Excluir, getFamiliaid}