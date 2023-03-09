import nc from 'next-connect'
import { getVitimao} from '../../../backend/db/ListVitima'

const b = nc()
b.get(getVitimao)
module.exports= b