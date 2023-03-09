const executequery  = require('../db')

const getEsquadra = async (req:any , res:any)=>{
    let bairro =""
    const  dado = req.query.idorgao
    try {
        if(dado===0)
        {
            bairro = await executequery('select * from tblesquadra',[])
        }
        else{
            bairro = await executequery('select * from tblesquadra where Idorgao = ? ',[dado])  
        }
        res.send(bairro)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        console.log(req.body)
            Executar = await executequery('Insert into tblesquadra(Nomeesquadra, Idorgao) values(?,?)'
            ,[dados.Nomeesquadra,dados.idorgao])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getEsquadra,Salvar}