import nc from 'next-connect'
import { getTermo, Salvar} from '../../../backend/db/DaoTermo'

const Local = nc()
Local.get(getTermo)
Local.post(Salvar)

module.exports= Local