const executequery  = require('../db')

const getViatura = async (req:any , res:any)=>{
    let  Tipo = req.query.Tipo
    try {
        let orgao = await executequery('select * from tblviatura v, tblmodelo mo, tblmarca ma where v.idmarca=ma.idmarca and mo.idmodelo=v.idmodelo and Tipo = ? and destino =?  ',[Tipo,'Apreendido(a)'])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}

export{getViatura}