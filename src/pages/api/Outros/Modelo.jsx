import nc from 'next-connect'
import {getMarca, getModelo, Salvar} from '../../../backend/db/DaoModelo'

const Modelo = nc()
Modelo.get(getModelo)
Modelo.post(Salvar)

module.exports= Modelo