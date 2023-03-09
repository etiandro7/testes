//import Provincia from "../../components/core/Outros/Provincia";
const executequery  =  require('../db')
import Provincia from '../../components/core/Outros/Provincia'

const getProvincia = async (req:any , res:any)=>{
    let Provincia =""

    //console.log("Pegaste o que?",req.query.Idnacionalidade)

    const  dado = req.query.Idnacionalidade

    //console.log("Pegaste o que?",dado)
    try {
        if(dado===undefined)
        {
            Provincia = await executequery('select * from tblprovincia',[])
        }
        else{
          Provincia = await executequery('select * from tblprovincia where Idnacionalidade = ? ',[dado])  
        }
        res.send(Provincia)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getProvinciaid = async (req:any , res:any)=>{
    try {
        const dados = JSON.parse(req.body)
        let prov = await executequery('select * from tblprovincia where idprovincia = ?',[dados.id])
        res.send(prov)
    } catch (error) {
        res.status(500).json(error)
    }
}

const SalvarProvincia = async  (req,res)=>{
    let  Executar 
    try {
        const dados = JSON.parse(req.body)
            Executar = await executequery('Insert into tblprovincia(nomeProvincia,idnacionalidade) values(?,?)',[dados.provincia,dados.idnacionalidade])     
  
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

export{getProvincia, SalvarProvincia,Excluir, getProvinciaid}