import nc from 'next-connect'
import {Excluir, getNacionalidade, getNacionalidadeid, SalvarNacionalidade} from '../../../backend/db/DaoNacionalidade'

const provincia = nc()
provincia.get(getNacionalidade)
provincia.post(SalvarNacionalidade)
provincia.delete(Excluir)
provincia.get(getNacionalidadeid)
module.exports= provincia