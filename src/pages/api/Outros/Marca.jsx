import nc from 'next-connect'
import {getMarca, Salvar} from '../../../backend/db/DaoMarca'

const Marca = nc()
Marca.get(getMarca)
Marca.post(Salvar)

module.exports= Marca