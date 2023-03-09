const executequery  = require('../db')

const getViatura = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblviatura v, tblmodelo mo, tblmarca ma where v.idmarca=ma.idmarca and mo.idmodelo=v.idmodelo',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        console.log(dados)
         Executar = await executequery('INSERT INTO tblviatura(tipoviatura, idmarca, idmodelo, matricula, nchassi, nmotor, foto, cor, anofabrica, cilidragem,destino,Proprietario,atribuido,dataatribuicao)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            ,[dados.tipoviatura,dados.idmarca,dados.idmodelo,dados.matricula,dados.nchassi,dados.nmotor,dados.foto,dados.cor,dados.anofabrico,dados.cilindragem,dados.destino,dados.Proprietario,dados. Atribuicao,
               dados.dataop])     
res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}
export{getViatura, Salvar}