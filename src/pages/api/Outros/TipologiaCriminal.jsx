import nc from 'next-connect'
import {getTipologia, Salvar} from '../../../backend/db/DaoTipologiacriminal'

const Tipo = nc()
Tipo.get(getTipologia)
Tipo.post(Salvar)

module.exports= Tipo