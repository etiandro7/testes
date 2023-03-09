import nc from 'next-connect'
import { getusuario} from '../../../backend/db/Login'

const Local = nc()
Local.get(getusuario)
module.exports= Local