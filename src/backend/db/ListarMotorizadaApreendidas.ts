const executequery  = require('../db')


const getlistaviaturaapreendidas = async (req:any , res:any)=>{
    let marticula = req.query.matricula
    let pessoa =""
    try {  
        if(marticula!=undefined)
        pessoa = await executequery('select ap.idapreensao, mar.marca, mo.modelo , viat.matricula,viat.nchassi ,viat.nmotor, ap.Motivodaapreensao, ap.Efectivo, day(Datadaapreensao) as Dia, Month(Datadaapreensao) as Mes, year(Datadaapreensao) as Ano, ap.Hora, mun.nomemunicipio,ap.Estado from tblapreensao ap, tblmarca mar, tblmodelo mo, tblviatura viat, tblmunicipio mun where ap.Idviatura = viat.idviatura and ap.Idmunicipio = mun.Idmunicipio and viat.idmodelo = mo.idmodelo and viat.idmarca = mar.idmarca and viat.tipoviatura = "Motorizada" and viat.matricula like ?',[`${marticula}%`])  
        else
        pessoa = await executequery('select ap.idapreensao, mar.marca, mo.modelo , viat.matricula,viat.nchassi ,viat.nmotor, ap.Motivodaapreensao, ap.Efectivo, day(Datadaapreensao) as Dia, Month(Datadaapreensao) as Mes, year(Datadaapreensao) as Ano, ap.Hora, mun.nomemunicipio,ap.Estado from tblapreensao ap, tblmarca mar, tblmodelo mo, tblviatura viat, tblmunicipio mun where ap.Idviatura = viat.idviatura and ap.Idmunicipio = mun.Idmunicipio and viat.idmodelo = mo.idmodelo and viat.idmarca = mar.idmarca and viat.tipoviatura = "Motorizada"',[])  
     
        res.send(pessoa)
    } catch (error) {
        res.status(500).json(error)
    }
}
    
export{getlistaviaturaapreendidas}