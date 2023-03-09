import nc from 'next-connect'
import { getViatura, Salvar} from '../../../backend/db/DaoViatura'

const Viatura = nc()
Viatura.get(getViatura)
Viatura.post(Salvar)

module.exports= Viatura