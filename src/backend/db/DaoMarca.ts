const executequery  = require('../db')

const getMarca = async (req:any , res:any)=>{
   
    let orgao =""
    const  dado = req.query.tipoviatura
    try {
        if(dado=='Motorizada' || dado=='Viatura')
        {
        orgao = await executequery('select * from tblmarca where Tipo = ?',[dado])
    }else{
       orgao = await executequery('select * from tblmarca',[])
    }
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}




const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        
            Executar = await executequery('Insert into tblmarca(Tipo, marca) values(?,?)'
            ,[dados.Tipo,dados.marca])     

 res.send(Executar)
    } catch (error) {
       res.status(500).json(error)
    }
}

export{getMarca, Salvar}