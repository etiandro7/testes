import nc from 'next-connect'
import {getVitimaOcorrencia} from '../../../backend/db/ListarVitimasOcorrencia'

const Local = nc()
Local.get(getVitimaOcorrencia)


module.exports= Local