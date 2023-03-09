import nc from 'next-connect'
import { getApreensao, Salvar} from '../../../backend/db/DaoApreensao'

const Local = nc()
Local.get(getApreensao)
Local.post(Salvar)

module.exports= Local