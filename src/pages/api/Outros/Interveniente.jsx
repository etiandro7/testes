import nc from 'next-connect'
import { getInterveniente, Salvar} from '../../../backend/db/DaoIntervenienteAC'

const Local = nc()
Local.get(getInterveniente)
Local.post(Salvar)

module.exports= Local