const executequery  = require('../db')

const getVitima = async (req:any , res:any)=>{
    let pessoa =""
    let  buscar = req.query.buscar
    let  nome = req.query.nome
    let  apelido = req.query.apelido

    try {
          if(nome!=undefined && apelido!=undefined){   
           
            pessoa = await executequery('SELECT idpessoa,Nomepessoa,Apelido,Estado_civil,Sexo, foto, nascimento,nacionalidade,pai,Mae,NBI,Proximo,Altura,Tipopessoa,Proximo, pro.nomeprovincia, m.nomemunicipio,r.nomerua,b.nomebairro FROM tblpessoa p, tblprovincia pro,tblmunicipio m, tblbairro b, tblrua r  where pro.idprovincia=p.Idprovincia and m.idmunicipio = p.Idmunicipio and r.idrua = p.Idrua and b.idbairro = p.Idbairro and Nomepessoa = ? and Apelido = ?',[nome,apelido])  
          
        }else{
           
            pessoa = await executequery('SELECT idpessoa,Nomepessoa,Apelido,Estado_civil,Sexo, foto, nascimento,nacionalidade,pai,Mae,NBI,Altura,Tipopessoa, pro.nomeprovincia, m.nomemunicipio FROM tblpessoa p, tblprovincia pro,tblmunicipio m  where pro.idprovincia=p.Idprovincia and m.idmunicipio = p.Idmunicipio  and Nomepessoa like ? and Tipopessoa = "ACUSADO"',[`%${buscar}%`])  
            
        }
           res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getVitima}