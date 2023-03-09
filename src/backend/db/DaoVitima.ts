const executequery  = require('../db')

const getVitima = async (req:any , res:any)=>{
    try {
        let pessoa = await executequery('SELECT idpessoa,Nomepessoa,Apelido,Estado_civil,Sexo, foto, nascimento,nacionalidade,pai,Mae,NBI,Proximo,Altura,Tipopessoa,Proximo, pro.nomeprovincia, m.nomemunicipio,r.nomerua,b.nomebairro FROM tblpessoa p, tblprovincia pro,tblmunicipio m, tblbairro b, tblrua r  where pro.idprovincia=p.Idprovincia and m.idmunicipio = p.Idmunicipio and r.idrua = p.Idrua and b.idbairro = p.Idbairro',[])
        res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar =""
    let outro =""
    try {
       
        const dados = JSON.parse(req.body)
    
        
        if(dados.Tipopessoa==='ACUSADO')
        {
         
           let Executa = await executequery('INSERT INTO tblpessoa(Nomepessoa, Tipopessoa, Apelido, Estado_civil, Sexo, Nascimento, Altura, NBI, Pai, Mae, Nacionalidade, Idprovincia, Idmunicipio, Profissao, Contacto,foto,Documento,residente) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            ,[dados.Nomepessoa,dados.Tipopessoa,dados.Apelido,dados.Estado_civil,dados.Sexo,dados.Nascimento,dados.Altura,dados.NBI,dados.Pai,dados.Mae,dados.Nacionalidade,dados.Idprovincia,dados.Idmunicipio,dados.Profissao,dados.Contacto,dados.foto,dados.Documento,dados.residente])     
            Executa = await executequery('INSERT INTO tblocorrenciaacusado(Idocorrencia, Idpessoa,Statusacusado) values(?,?,?)',[dados.numero ,Executa.insertId,'Conhecido'])
           
            res.status(201).json(Executa)
        }
        else{
            Executar = await executequery('INSERT INTO tblpessoa(Nomepessoa, Tipopessoa, Estado_civil, Sexo,Pai, Mae, Nacionalidade, Idprovincia,   Profissao, Contacto,residente,idade) values(?,?,?,?,?,?,?,?,?,?,?,?)'
            ,[dados.Nomepessoa,dados.Tipopessoa,dados.Estado_civil,dados.Sexo,dados.Pai,dados.Mae,dados.Nacionalidade,dados.Idprovincia,dados.Profissao,dados.Contacto,dados.residente,dados.idade])     
            res.send(Executar)
        }
           

    } catch (error) {
       res.status(500).json(error)
    }
}
export{getVitima,Salvar}