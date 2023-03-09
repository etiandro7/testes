const executequery  = require('../db')


const getListarInfractor = async (req:any , res:any)=>{
    
    let pessoa =""
    let Tipodepessoa = req.query.Tipodepessoa
    try {  
pessoa = await executequery('SELECT datacadastro ,idpessoa,Nomepessoa,Apelido,Estado_civil,Sexo, foto, nascimento,nacionalidade,pai,Mae,NBI,Proximo,Altura,Tipopessoa, pro.nomeprovincia, m.nomemunicipio,r.nomerua,b.nomebairro FROM tblpessoa p, tblprovincia pro,tblmunicipio m, tblbairro b, tblrua r  where pro.idprovincia=p.Idprovincia and m.idmunicipio = p.Idmunicipio and r.idrua = p.Idrua and b.idbairro = p.Idbairro and Tipopessoa = ?',[Tipodepessoa])  
res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}
    
export{getListarInfractor}