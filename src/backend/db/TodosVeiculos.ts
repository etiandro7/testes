const executequery  = require('../db')

const getTodosViatura = async (req:any , res:any)=>{
    let pessoa =""
    let  matricula = req.query.matricula
    try {
          if(matricula!=undefined){           
            pessoa = await executequery('SELECT idviatura, mr.Tipo, Mr.marca, M.modelo, nmotor,nchassi, anofabrica,cilidragem, cor,matricula FROM tblviatura V, tblmodelo M, tblmarca MR where mr.idmarca = m.idmarca and v.idmarca = mr.idmarca and v.idmodelo = m.idmodelo and matricula like ?',[`%${matricula}%`])  
        }
           res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getTodosViatura}