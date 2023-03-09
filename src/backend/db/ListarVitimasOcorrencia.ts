const executequery  = require('../db')

const getVitimaOcorrencia = async (req:any , res:any)=>{

let pessoa
    let  nome = req.query.nome
    let  apelido = req.query.apelido
    let  codigo = req.query.codigo

 
    try {
           if(nome!=undefined || apelido!=undefined || codigo!=undefined){
           pessoa = await executequery('SELECT oco.idocorrencia,pes.Nomepessoa, oco.Hora, day(Dataocorrencia) as Dia, MONTH(Dataocorrencia) as Mes, year(Dataocorrencia) as Ano, oco.Nomeocorrencia,es.Nomeesquadra ,us.Nomecompleto FROM tblocorrencia oco, tblmunicipio mun, tblorgao org, tblesquadra es, tblpessoa pes, tblusuario us where oco.Idusuario = us.idusuario and oco.Idesquadra = es.idesquadra and oco.Idorgao = org.idorgao and mun.Idmunicipio = oco.Idmunicipio and oco.Idpessoa = pes.idpessoa and (pes.Nomepessoa like ? or pes.Apelido like ? or idocorrencia=?)',[`${nome}%`,`${apelido}%`,codigo])  
        }
        else{
            pessoa = await executequery('SELECT oco.idocorrencia,pes.Nomepessoa, oco.Hora, day(Dataocorrencia) as Dia, MONTH(Dataocorrencia) as Mes, year(Dataocorrencia) as Ano, oco.Nomeocorrencia,es.Nomeesquadra ,us.Nomecompleto FROM tblocorrencia oco, tblmunicipio mun, tblorgao org, tblesquadra es, tblpessoa pes, tblusuario us where oco.Idusuario = us.idusuario and oco.Idesquadra = es.idesquadra and oco.Idorgao = org.idorgao and mun.Idmunicipio = oco.Idmunicipio and oco.Idpessoa = pes.idpessoa',[])
        }
   
           res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getVitimaOcorrencia}