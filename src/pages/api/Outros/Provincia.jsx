import nc from 'next-connect'
import {Excluir, getProvincia, getProvinciaid, SalvarProvincia} from '../../../backend/db/DaoProvincia'

const provincia = nc()
provincia.get(getProvincia)
provincia.post(SalvarProvincia)
provincia.delete(Excluir)
provincia.get(getProvinciaid)
module.exports= provincia