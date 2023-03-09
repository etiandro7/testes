const executequery  = require('../db')

const getUsuario = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('SELECT u.idusuario,o.idorgao,e.idesquadra Patente, NomeCompleto,usuario, Funcao, o.nomeOrgao, E.Nomeesquadra, Foto, nomeprovincia, nomemunicipio , provincia, municipio,sigla FROM tblusuario u,tblorgao O, tblesquadra E,tblprovincia P, tblmunicipio M where u.idEsquadra = E.idesquadra and o.idorgao = u.idorgao and provincia = p.idprovincia and municipio = m.idmunicipio',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
    
            Executar = await executequery('INSERT INTO tblusuario(Nomecompleto, usuario,Senha,Idorgao,Idesquadra,Patente, Foto, Nivelacesso, Funcao,provincia,municipio) values(?,?,?,?,?,?,?,?,?,?,?)'
            ,[dados.Nomecompleto,dados.usuario,dados.Senha,dados.idorgao,dados.IdEsquadra,dados.Patente,dados.foto,dados.Nivelacesso,dados.Funcao,dados.Idprovincia,dados.Idmunicipio])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getUsuario, Salvar}