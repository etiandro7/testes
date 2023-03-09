const executequery  = require('../db')

const getArma = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblarma',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        console.log(req.body)
            Executar = await executequery('insert into tblarma(Nomearma, Marca, Ndaarma, Calibre, Foto,Origem,Proprietario) values(?,?,?,?,?,?,?)'
            ,[dados.nomearma,dados.marca,dados.narma,dados.calibre,dados.foto,dados.Origem,dados.Proprietario])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getArma, Salvar}