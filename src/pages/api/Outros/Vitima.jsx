import nc from 'next-connect'
import {getVitima,Salvar} from '../../../backend/db/DaoVitima'

const Familia = nc()
Familia.get(getVitima)
Familia.post(Salvar)

module.exports= Familia