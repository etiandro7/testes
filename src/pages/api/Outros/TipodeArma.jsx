import nc from 'next-connect'
import {getTipoarma, Salvar} from '../../../backend/db/DaoTipodearma'

const Tipo = nc()
Tipo.get(getTipoarma)
Tipo.post(Salvar)

module.exports= Tipo