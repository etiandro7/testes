const executequery  = require('../db')

const getVitima = async (req:any , res:any)=>{
    let pessoa =""
    let  titulo = req.query.titulo
    let  nome = req.query.nome
    let  apelido = req.query.apelido
    try {
          if(titulo!=undefined){   
              console.log('oura maka mais',req.query)  
            pessoa = 
await executequery('SELECT idocorrencia,Nomeocorrencia,nomeorgao, nomeesquadra, FA.Nomefamilia, ps.Nomepessoa, ps.Nacionalidade, pr.nomeprovincia,mu.nomemunicipio,ba.nomebairro,ru.nomerua,CR.Nomecrime,DES.Descricao,Relacaovitima,TA.nomearma, LC.nomelocal,OC.datacadastro ,Dataocorrencia,hora,Autor,Modusoperandi,Descricadaarma,Esclarecido,causa,meios FROM tblpessoa ps, tblocorrencia OC, tblorgao OG,tblesquadra EQ ,tblprovincia PR ,tblmunicipio MU,tblbairro BA,tbltipodearma TA,tbllocais LC,tblrua RU, tblfamilia FA ,tblcrimes CR, tbldescricao DES where OC.Idprovincia = PR.idprovincia and OC.Idmunicipio = MU.idmunicipio and OC.Idorgao = OG.idorgao and OC.Idbairro = BA.idBairro and OC.idrua = RU.idrua and OC.Idesquadra = EQ.idEsquadra and FA.idfamilia = OC.Idfamilia and CR.idcrimes = OC.Idcrimes and Des.iddescricao = OC.Iddescricao and TA.idtipodearma = OC.Idtipodearma and LC.idlocais = OC.Idlocal and ps.idpessoa = OC.idocorrencia and Nomeocorrencia = ?',[titulo])  
          
        }else{
            pessoa 
= await executequery('SELECT idocorrencia,Nomeocorrencia,nomeorgao, nomeesquadra, FA.Nomefamilia, ps.Nomepessoa, ps.Nacionalidade, pr.nomeprovincia,mu.nomemunicipio,ba.nomebairro,ru.nomerua,CR.Nomecrime,DES.Descricao,Relacaovitima,TA.nomearma, LC.nomelocal,OC.datacadastro ,Dataocorrencia,hora,Autor,Modusoperandi,Descricadaarma,Esclarecido,causa,meios FROM tblpessoa ps, tblocorrencia OC, tblorgao OG,tblesquadra EQ ,tblprovincia PR ,tblmunicipio MU,tblbairro BA,tbltipodearma TA,tbllocais LC,tblrua RU, tblfamilia FA ,tblcrimes CR, tbldescricao DES where OC.Idprovincia = PR.idprovincia and OC.Idmunicipio = MU.idmunicipio and OC.Idorgao = OG.idorgao and OC.Idbairro = BA.idBairro and OC.idrua = RU.idrua and OC.Idesquadra = EQ.idEsquadra and FA.idfamilia = OC.Idfamilia and CR.idcrimes = OC.Idcrimes and Des.iddescricao = OC.Iddescricao and TA.idtipodearma = OC.Idtipodearma and LC.idlocais = OC.Idlocal and ps.idpessoa = OC.idocorrencia',[])  
            
        }
           res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getVitima}