const executequery  = require('../db')

const getusuario = async (req:any , res:any)=>{
    let pessoa =""
    let  usuario = req.query.usuario
    let  senha = req.query.senha
 

    console.log(req.query)
    try {
          if(usuario!=undefined && senha!=undefined)
          { 
             
            pessoa = await executequery('SELECT u.idusuario,o.idorgao,e.idesquadra, Patente, Nomecompleto, usuario, Funcao, o.Nomeorgao, E.Nomeesquadra, Foto, nomeprovincia, nomemunicipio , provincia, municipio,sigla FROM tblusuario u,tblorgao O, tblesquadra E,tblprovincia P, tblmunicipio M where u.idEsquadra = E.idesquadra and o.idorgao = u.idorgao and provincia = p.idprovincia and municipio = m.idmunicipio and usuario = ? and senha = ?',[usuario,senha])       
        } 
           res.status(200).json(pessoa)
           
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getusuario}