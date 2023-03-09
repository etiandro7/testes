import nc from 'next-connect'
import {getVitima} from '../../../backend/db/OcorrenciaAcusadoBusca'

const b = nc()
b.get(getVitima)


module.exports= b