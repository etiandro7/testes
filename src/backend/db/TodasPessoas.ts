const executequery  = require('../db')

const getTodos = async (req:any , res:any)=>{
    let pessoa =""
    let  nome = req.query.nome
    try {
          if(nome!=undefined){           
            pessoa = await executequery('SELECT idpessoa,Nomepessoa,Apelido,Estado_civil,Sexo, foto, nascimento,nacionalidade,pai,Mae,NBI,Proximo,Altura,Tipopessoa,Proximo FROM tblpessoa where Nomepessoa like ?',[`%${nome}%`])  
        }
           res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}   
export{getTodos}