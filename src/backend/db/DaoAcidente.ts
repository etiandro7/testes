const executequery  = require('../db')

const getApreensao = async (req:any , res:any)=>{
    try {
        let orgao = await executequery('select * from tblacidentes',[])
        res.send(orgao)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Salvar = async  (req,res)=>{
    let  Executar 
    try {

        const dados = JSON.parse(req.body)
        console.log(dados)
            Executar = await executequery('INSERT INTO tblacidentes( Tipodeacidente, Dataacidente, Hora, Idprovincia, Idmunicipio, Idbairro, Idrua, Idorgao, Idesquadra, via, Descricafactos, Local, Latitude, Longitude, Causa) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            ,[

                dados.Tipodeacidente,
                dados.Dataacidente, 
                dados.Hora,
                dados.Idprovincia, 
                dados.Idmunicipio, 
                dados.Idbairro, 
                dados.Idrua,
                dados.Idorgao,
                dados.Idesquadra, 
                dados.via, 
                dados.Descricafactos, 
                dados.Local, 
                dados.Latitude, 
                dados.Longitude, 
                dados.Causa,
                dados.Factoratmosferico
            ])     

 res.send(Executar)
    } catch (error) {
        console.log("erro do tipo ",error)
       res.status(500).json(error)
    }
}

export{getApreensao, Salvar}