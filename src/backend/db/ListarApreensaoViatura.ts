const executequery  = require('../db')


const getViatura = async (req: any, res: any) => {
  let pessoa = "";
  let Tipo = req.query.Tipo;
  try {
    if (Tipo == "Viatura" || Tipo == "Motorizada")
      pessoa = await executequery(
        "SELECT ap.idapreensao,ap.Nomedaapreensao, ap.Motivodaapreensao, ap.Fieldepositado, ap.Localdaapreensao , ap.outros ,cor, mo.modelo, mar.marca, vi.cilidragem, org.Nomeorgao, esq.Nomeesquadra,vi.anofabrica,vi.nmotor,vi.nchassi,Datadaapreensao,Hora,vi.foto from tblapreensao ap, tblviatura vi , tblmodelo mo, tblmarca mar, tblorgao org, tblesquadra Esq where vi.idviatura=ap.Idviatura and mo.idmodelo = vi.idmodelo and vi.idmarca = mar.idmarca and ap.Idorgao = org.idorgao and ap.Idesquadra = esq.idesquadra and ap.Nomedaapreensao =? and Estado <> ?",
        [Tipo,'Livre']
      );
    if (Tipo == "Arma de Fogo")
      pessoa = await executequery(
        "SELECT ap.idapreensao,ap.Nomedaapreensao, ap.Motivodaapreensao, ap.Fieldepositado, ap.Localdaapreensao , ap.outros , ar.Nomearma,ar.Marca,ar.Ndaarma, ar.Calibre,ar.Foto ,org.Nomeorgao, esq.Nomeesquadra,Datadaapreensao,Hora,ar.foto from tblapreensao ap, tblarma ar , tblorgao org, tblesquadra Esq where ar.idarma=ap.Idarma and ap.Idorgao = org.idorgao and ap.Idesquadra = esq.idesquadra and ap.Nomedaapreensao =? and Estado <> ?",
        [Tipo,'Livre']
      );
    if (Tipo == "Diversos Meios")
      pessoa = await executequery(
        "SELECT ap.idapreensao,ap.Nomedaapreensao, ap.Motivodaapreensao, ap.Fieldepositado, ap.Localdaapreensao , ap.outros, org.Nomeorgao, esq.Nomeesquadra,Datadaapreensao,Hora,ap.Foto1 from tblapreensao ap,  tblorgao org, tblesquadra Esq where   ap.Idorgao = org.idorgao and ap.Idesquadra = esq.idesquadra  and ap.Nomedaapreensao =? and Estado <> ?",
        [Tipo,'Livre']
      );

    res.send(pessoa);
  } catch (error) {
    res.status(500).json(error);
  }
};
    
export{getViatura}