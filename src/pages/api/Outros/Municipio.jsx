import nc from 'next-connect'
import {getMunicipio, getOrgao, SalvarMunicipio} from '../../../backend/db/DaoMunicipio'

const Municipio = nc()
Municipio.get(getMunicipio)
Municipio.post(SalvarMunicipio)

module.exports= Municipio