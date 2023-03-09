import nc from 'next-connect'
import { getListarInfractor} from '../../../backend/db/ListarInfractores'

const Local = nc()
Local.get(getListarInfractor)
module.exports= Local