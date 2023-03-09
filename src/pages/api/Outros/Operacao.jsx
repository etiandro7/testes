import nc from 'next-connect'
import { getOperacao, Salvar} from '../../../backend/db/DaoOperacao'

const Local = nc()
Local.get(getOperacao)
Local.post(Salvar)

module.exports= Local