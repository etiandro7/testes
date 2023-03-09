import nc from 'next-connect'
import { getEsquadra, Salvar} from '../../../backend/db/DaoEsquadra'

const Local = nc()
Local.get(getEsquadra)
Local.post(Salvar)

module.exports= Local