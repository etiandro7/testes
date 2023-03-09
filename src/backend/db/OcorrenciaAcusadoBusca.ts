const executequery  = require('../db')

const getVitima = async (req:any , res:any)=>{
    let pessoa =""
    let  titulo = req.query.titulo
    let  nome = req.query.nome
    let  apelido = req.query.apelido
    try {
          if(nome!=undefined){   
              console.log('oura maka mais',req.query)  
            pessoa = 
await executequery('SELECT OC.idocorrencia,Nomeocorrencia,nomeorgao, nomeesquadra ,CR.Nomecrime, mu.nomemunicipio,TA.nomearma, LC.nomelocal ,Dataocorrencia,hora,PS.nomepessoa, PS.apelido FROM tblocorrencia OC,tblocorrenciaacusado OAC, tblorgao OG,tblesquadra EQ ,tblprovincia PR,tblpessoa PS ,tblmunicipio MU,tblbairro BA,tbltipodearma TA,tbllocais LC,tblrua RU, tblfamilia FA ,tblcrimes CR, tbldescricao DES where OC.Idprovincia = PR.idprovincia and OC.Idmunicipio = MU.idmunicipio and OC.Idorgao = OG.idorgao and OC.Idbairro = BA.idBairro and OC.idrua = RU.idrua and OC.Idesquadra = EQ.idEsquadra and FA.idfamilia = OC.Idfamilia and CR.idcrimes = OC.Idcrimes and Des.iddescricao = OC.Iddescricao and TA.idtipodearma = OC.Idtipodearma and LC.idlocais = OC.Idlocal and OAC.idocorrencia = OC.idocorrencia and PS.idpessoa = OAC.idPessoa and PS.nomepessoa = ?',[nome])  
          
        }else{
            pessoa 
= await executequery('SELECT OC.idocorrencia,Descricadaarma,Nomeocorrencia,day(Dataocorrencia) as Dia, Month(Dataocorrencia) as Mes,year(Dataocorrencia) as Ano, M.nomemunicipio,Dataocorrencia,hora,PS.nomepessoa, PS.apelido, Statusacusado FROM tblocorrencia OC,tblocorrenciaacusado OAC,tblpessoa PS ,tblmunicipio M where PS.idpessoa = OAC.idPessoa and OAC.idocorrencia = OC.idocorrencia and M.Idmunicipio = OC.idmunicipio',[])  
            
        }
           res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getVitima}