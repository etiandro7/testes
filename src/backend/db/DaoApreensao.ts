const executequery  = require('../db')

const getApreensao = async (req:any , res:any)=>{
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
        
            Executar = await executequery('INSERT INTO  tblapreensao(Nomedaapreensao,Descricao,Datadaapreensao,Hora,Idprovincia ,Idmunicipio,Idbairro,Idrua,Idorgao,Idesquadra,Idoperacao,Idviatura,Idarma,Motivodaapreensao,Fieldepositado,Outros,Localdaapreensao,Foto1,Foto2,Efectivo) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            ,[dados.Tipo,dados.Descricao,dados.Datadaapreensao,dados.Hora,dados.Idprovincia,dados.Idmunicipio,dados.Idbairro,dados.Idrua,dados.idorgao,dados.IdEsquadra,dados.Idoperacao,dados.Idviatura,dados.Idarma,dados.Motivodaapreensao,dados.Fieldepositado,dados.Outros,dados.Localdaapreensao,dados.Foto1,dados.Foto,dados.Efectivo])     

          
 res.send(Executar)
    } catch (error) {
        console.log("erro do tipo ",error)
       res.status(500).json(error)
    }
}

export{getApreensao, Salvar}