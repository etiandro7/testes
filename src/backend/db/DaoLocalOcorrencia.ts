//import Provincia from "../../components/core/Outros/Provincia";
const executequery  =  require('../db')


const getLocal = async (req:any , res:any)=>{

    try {
        let prov = await executequery('select * from tbllocais',[])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}


const Salvar = async  (req,res)=>{
    let  Executar 
    try {
        const dados = JSON.parse(req.body)
      console.log(req.body)
            Executar = await executequery('Insert into tbllocais(Nomelocal) values(?)',[dados.local])     
             
 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}
const Excluir = async  (req:any , res:any)=>{  
    const dados = JSON.parse(req.body)
   try
    {
       let Executar = await executequery('delete from tbllocais where idlocaias = ?',[dados.id])
       res.send(Executar)
    } 
    catch (error)
    {
       res.status(500).json(error)
    }
}

export{getLocal, Salvar,Excluir}