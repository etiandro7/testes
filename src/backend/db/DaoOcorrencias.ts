const executequery  = require('../db')

const getOcorrencia = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblocorrencia',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar =""
    try {

        const dados = JSON.parse(req.body)
     console.log(req.body)
            Executar = await executequery('INSERT INTO tblocorrencia(Nomeocorrencia, Dataocorrencia, Hora, Idprovincia, Idmunicipio, Idbairro, Idpessoa, Idrua, Idorgao, Idesquadra, Idfamilia, Idcrimes, Iddescricao, Descricaofactos, Autor, Relacaovitima, Modusoperandi, Idlocal, Idtipodearma, Descricadaarma, Esclarecido, Idusuario,causa,meios) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            ,[dados.Nomeocorrencia,dados.Dataocorrencia,dados.Hora,dados.Idprovincia,dados.Idmunicipio,dados.Idbairro,dados.Idpessoa,dados.Idrua,dados.idorgao,dados.IdEsquadra,dados.Idfamilia,dados.IdTipologia,dados.IdDescricao,dados.Descricaofactos,dados.Autor,dados.Relacaovitima,dados.Modusoperandi,dados.idLoca,dados.IdTipodeArma,dados.Descricadaarma,dados.Esclarecido,dados.Idusuario,dados.causa,dados.Meiosubtraido])     

 res.send(Executar)
 console.log(Executar)
    } catch (error) {
        console.log("Erro do Tipo ",error)
       res.status(500).json(error)
    }
}

export{getOcorrencia, Salvar}