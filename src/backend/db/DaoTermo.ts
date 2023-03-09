const executequery  = require('../db')

const getTermo = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblapreensao',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        
        Executar = await executequery('update tblapreensao set estado = ? where idapreensao = ? ',['Livre',dados.Idapreensao])
            Executar = await executequery('INSERT INTO tbltermodeentrega(Datadeentrega, Hora, Idorgao, Idesquadra, Nomedofuncionario, Patente, Idapreensao) values(?,?,?,?,?,?,?)'
            ,[dados.Datadeentrega,dados.Hora,dados.idorgao,dados.IdEsquadra,dados.Nomedofuncionario,dados.Patente,dados.Idapreensao])     
         
 res.send(Executar)
    } catch (error) {
        console.log("erro do tipo ",error)
       res.status(500).json(error)
    }
}

export{getTermo, Salvar}